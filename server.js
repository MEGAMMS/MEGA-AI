import { runAPI } from "./replicateAPI.js";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/dream", async (req, res) => {
    try {
        const prompt = req.body.prompt;
        console.log(req.body.prompt);
        const output = await runAPI(prompt);
        // console.log(output);
        res.send(output);
    } catch (err) {
        console.log(err);
        console.log("error fineshed");
        res.status(500).send(err?.message || "something went wrong");
    }
});

app.listen(8080, () => console.log("make art on http://localhost:8080/dream"));
