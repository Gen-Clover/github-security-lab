import express from "express";

const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  next();
});
const port = process.env.PORT || 3001;

app.get("/api/hello", (_req, res) => {
  res.json({
    message: "Node backend is running successfully.",
    time: new Date().toISOString()
  });
});

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`Gen Clover test server running on port ${port}`);
});