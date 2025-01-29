import { AtpAgent } from "@atproto/api";
import * as dotenv from "dotenv";
import * as process from "process";

dotenv.config();

const agent = new AtpAgent({
  service: "https://bsky.social",
});

let body: string = "";

process.stdin.on("data", (chunk: Buffer) => {
  body += chunk.toString(); 
});

process.stdin.on("end", () => {
  console.log("Collected Input:", body);
  console.log("len:", body.length);
});

async function main() {
  if (body.length > 300 ) {
    return 1;
  }
  
  await agent.login({
    identifier: process.env.BLUESKY_HANDLE!,
    password: process.env.BLUESKY_PASSWORD!,
  });
  await agent.post({
    text: body,
  })
  
  return 0;
}

main();

