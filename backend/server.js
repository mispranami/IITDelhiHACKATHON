require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors()); // Allows requests from frontend

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ MongoDB connected"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));

// Define Schema & Model
const FactCheckSchema = new mongoose.Schema({
    username: String,
    post_permlink: String,
    report_content: String,
    timestamp: { type: Date, default: Date.now },
});
const FactCheck = mongoose.model("FactCheck", FactCheckSchema);

// Routes
app.get("/", (req, res) => {
    res.send("Hive News Platform API is running!");
});

// Fact-Check Submission Endpoint
app.post("/submit-report", async (req, res) => {
    try {
        const { username, post_permlink, report_content } = req.body;

        if (!username || !post_permlink || !report_content) {
            return res.status(400).json({ success: false, message: "All fields are required." });
        }

        const newReport = new FactCheck({ username, post_permlink, report_content });
        await newReport.save();

        res.json({ success: true, message: "✅ Fact-check report submitted!" });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
