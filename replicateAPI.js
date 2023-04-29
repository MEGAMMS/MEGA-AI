import * as dotenv from "dotenv";
import Replicate from "replicate";

export async function runAPI(prompt) {
    try {
        dotenv.config();
        const replicate = new Replicate({
            auth: process.env.replicate_KEY,
        });
        const output = await replicate.run(
            "stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf",
            {
                input: {
                    prompt: prompt,
                    // num_inference_steps: 500,
                },
            }
        );
        return output;
    } catch (err) {
        throw err;
    }
}
