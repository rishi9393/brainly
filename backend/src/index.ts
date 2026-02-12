import express from "express";
import { ContentModel, LinkModel, UserModel } from "./db.js";
import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "./config.js";
import { userMiddleware } from "./middlewares.js";
import ts from "typescript";
import { random } from "./utils.js";
import cors from "cors";  

const app = express();

app.use(express.json());
app.use(cors());

app.post("/api/v1/signin", async (req, res) => {
  const { username, password } = req.body;
  const userExists = await UserModel.findOne({
    username,
    password,
  });

  if (userExists) {
    const token = jwt.sign(
      {
        id: userExists._id,
      },
      JWT_PASSWORD,
    );

    res.json({ token });
  } else {
    res.status(403).json({ message: "Invalid credentials" });
  }
});

app.post("/api/v1/signup", async (req, res) => {
  const { username, password } = req.body;
  try {
    await UserModel.create({
      username: username,
      password: password,
    });

    res.json({ message: "User created successfully" });
  } catch (error) {
    res.status(411).json({ message: "username already exists" });
  }
});
app.post("/api/v1/content", userMiddleware, (req, res) => {
  const link = req.body.link;
  const type = req.body.type;

  ContentModel.create({
    link,
    type,
    // @ts-ignore
    userId: req.userId,
    title: req.body.title,
    tags: [],
  });

  res.json({ message: "content created" });
});
app.get("/api/v1/content", userMiddleware, async (req, res) => {
  // @ts-ignore
  const userId = req.userId;
  const content = await ContentModel.find({
    userId: userId,
  }).populate("userId", "username -_id");
  res.json({ content });
});
app.delete("/api/v1/content", userMiddleware, async (req, res) => {
  const contentId = req.body.contentId;
  // @ts-ignore
  const userId = req.userId;

  await ContentModel.deleteMany({
    contentId,
    // @ts-ignore
    userId: userId,
  });
  res.json({ message: "content deleted" });
});
app.post("/api/v1/brain/share", userMiddleware, async (req, res) => {
  const { share } = req.body;
  if (share) {
    const existsingLink = await LinkModel.findOne({
      // @ts-ignore
      userId: req.userId,
    });

    if (existsingLink) {
      res.json({
        hash: existsingLink.hash,
      });
      return;
    }

    const hash = random(10);
    await LinkModel.create({
      // @ts-ignore
      userId: req.userId,
      hash: hash,
    });
    res.json({ hash });
  } else {
    // @ts-ignore
    await LinkModel.deleteOne({
      // @ts-ignore
      userId: req.userId,
    });
    res.json({ message: "Link removed" });
  }
});
app.get("/api/v1/brain/:shareLink", async (req, res) => {
  const hash = req.params.shareLink;

  const link = await LinkModel.findOne({
    hash,
  });

  if (!link) {
    res.status(411).json({
      message: "The link is not shared",
    });
  } else {
    const content = await ContentModel.find({
      userId: link.userId,
    });

    const user = await UserModel.findOne({
      _id: link.userId,
    });

    if (!user) {
      res.status(411).json({
        message: "User not found",
      });
    }

    res.json({
      username: user?.username,
      constent: content,
    });
  }
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
