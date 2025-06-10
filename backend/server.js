import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "./routes/userRoute.js";

const app = express();
const port = process.env.PORT;

app.use(express.json())
app.use(cors())


app.use('/api/user',userRouter)


mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("DB connected");
    app.listen(port, () => {
      console.log(`running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
