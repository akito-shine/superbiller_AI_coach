"use client";

import { useEffect, useState } from "react";
import { open as openEmbed } from "@play-ai/web-embed";

// Replace with your web embed ID
const webEmbedId ="YoU286H0xP9Sb5J4aum2R";



/*
 * [Agent Greeting]
 * Hello what do you want to change the text on the screen to?
 *
 * [Agent Prompt]
 * Your only job is to change the text on the page to a given string.
 * Do not do anything else. Do not offer to do anything else.
 * After changing the text, END THE CALL IMMEDIATELY.
 */

export default function Home() {
  const [text, setText] = useState("AI coach from superbiller");

  // Define your events here
  const events = [
    {
      name: "change-text",
      when: "The user says what they want to change the text on the screen to",
      data: {
        text: { type: "string", description: "The text to change to" },
      },
    },
  ] as const;

  // Define your event handler here
  const onEvent = (event: any) => {
    console.log("onEvent: ", event);
    if (event.name === "change-text") {
      setText(event.data.text);
    }
  };

  useEffect(() => {
    openEmbed(webEmbedId, { events, onEvent });
  }, []);

  return (
    <>
      <div className="flex justify-center items-center h-[70vh]">
        <div className="font-medium text-2xl">{text}</div>
      </div>
    </>
  );
}
