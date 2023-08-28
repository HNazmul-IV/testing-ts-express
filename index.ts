import express from "express";
import cors from "cors";

const app = express();

app.get("/", (req, res, nex) => {
  res.json("Hello, I am working");
});

app.listen(process.env.PORT || 8080, () => console.log("server running on http://localhost:8080"));
