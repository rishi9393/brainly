import mongoose, { Schema, model } from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/brainly");

const UserSchema = new Schema({
  username: { type: String, unique: true },
  password: String,
});

const ContentSchema = new Schema({
  title: String,
  link: String,
  type: String,
  tags: [{ type: mongoose.Types.ObjectId, ref: "Tag" }],
  userId: { type: mongoose.Types.ObjectId, ref: "UserModel", required: true },
});

const LinkSchema = new Schema({
  hash: String,
  userId: { type: mongoose.Types.ObjectId, ref: "UserModel", required: true },
});

export const LinkModel = model("LinkModel",LinkSchema) ;
export const UserModel = model("UserModel", UserSchema);
export const ContentModel = model("ContentModel", ContentSchema);
