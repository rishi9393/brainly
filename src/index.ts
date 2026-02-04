import express from "express";
import { ContentModel, UserModel } from "./db.js";
import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "./config.js";
import { userMiddleware } from "./middlewares.js";
import ts from "typescript";

const app = express();

app.use(express.json());

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
app.post("/api/v1/brain/share", userMiddleware, (req, res) => {});
app.get("/api/v1/brain/:shareLink", (req, res) => {});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
