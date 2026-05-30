import dotenv from "dotenv"
dotenv.config()

import app from "./src/app.js";

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT)
})