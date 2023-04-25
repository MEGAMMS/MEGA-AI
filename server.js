import * as dotenv from "dotenv";
dotenv.config();

import Replicate from "replicate";

const replicate = new Replicate({
    auth: process.env.APIKEY,
});

import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/dream", async (req, res) => {
    const prompt = req.body.prompt;
    console.log(req.body.prompt);
    const output = await replicate.run(
        "stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf",
        {
            input: {
                prompt: prompt,
                // n_predictions: 1,
            },
        }
    );
    console.log(output);
    res.send(output);
});

app.listen(8080, () => console.log("make art on http://localhost:8080/dream"));
