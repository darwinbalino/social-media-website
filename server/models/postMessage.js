import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  message: String,
  selectedFile: String,
  likeCount: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
