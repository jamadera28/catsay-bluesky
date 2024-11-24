import { AtpAgent } from "@atproto/api";
import * as dotenv from "dotenv";
import * as process from "process";

dotenv.config();

// Create a Bluesky Agent
const agent = new AtpAgent({
  service: "https://bsky.social",
});

let body: string = "";

// Listen for data events on stdin to collect chunks of input
process.stdin.on("data", (chunk: Buffer) => {
  body += chunk.toString(); // Convert Buffer to string and append
});

// Listen for the end event to process the collected input
process.stdin.on("end", () => {
  //console.log("Collected Input:", body); // Or process the input as needed
});

async function main() {
  //console.log(process.env.BLUESKY_HANDLE!);
  //console.log(process.env.BLUESKY_PASSWORD!);
  if (body.length > 300) {
    return 1;
  }
  await agent.login({
    identifier: process.env.BLUESKY_HANDLE!,
    password: process.env.BLUESKY_PASSWORD!,
  });
  await agent.post({
    text: body,
  });
  return 0;
}

main();

