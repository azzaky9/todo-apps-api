import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

// Create Express server
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send({ message: "Hello from express." });
});

const PORT = 3000;
const dev = process.env.NODE_ENV;

app.listen(PORT, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }

  console.log(`> Server running on ${dev} at port [::]3000`);
});
