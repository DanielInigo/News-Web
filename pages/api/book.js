import BookMark from "./model/Schema";
import mongoose from "mongoose";

export default async function handler(req, res) {
  mongoose.set("strictQuery", true);
  mongoose.connect(process.env.DB_URL).then(() => {
    console.log("Database Connected");
  });
  if (req.method === "POST") {
    const { title, description, image, url, email } = req.body;
    const bmark = new BookMark({
      title,
      description,
      image,
      url,
      email
    });
    bmark.save().then(() => {
      res.status(200).send("Successful");
    });
  } else {
    res.status(500).json({ message: "Invalid request" });
  }
}
