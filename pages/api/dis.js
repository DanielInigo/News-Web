import BookMark from "./model/Schema";
import mongoose from "mongoose";

export default async function handler(req, res) {
  mongoose.set("strictQuery", true);
  mongoose.connect(process.env.DB_URL).then(() => {
    console.log("Database Connected");
  });
  if (req.method === "POST") {
    const { email } = req.body;
    BookMark.find({email:email},async(err,result)=>{
        res.status(200).json(result);
    })
  } else {
    res.status(500).json({ message: "Invalid request" });
  }
}
