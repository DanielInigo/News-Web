import { Schema, model, models } from "mongoose";

const markSchema = new Schema({
  title: "String",
  description: "String",
  image: "String",
  url:"String",
  email:"String"
});

const BookMark = models.bookmarks || model("bookmarks", markSchema);

export default BookMark;
