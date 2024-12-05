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
  const [text, setText] = useState("Your AI coach");

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
    <div className="flex flex-col justify-center items-center h-[90vh] bg-gray-50">
      {/* Logo from the Internet */}
      <img
        src="https://media.licdn.com/dms/image/v2/C560BAQENKPAX_HkK-A/company-logo_200_200/company-logo_200_200/0/1630652411649/superbiller_com_logo?e=1741219200&v=beta&t=P5BjKK3gMAJW58cLGAggn1krdUbhy6XSziHAZtaD2Lw" // Replace with the online logo URL
        alt="Logo"
        className="w-24 h-24 mb-4"
      />

      {/* Main Text */}
      <h1 className="text-2xl font-bold text-red-500">{text}</h1>

      {/* Subtext */}
      <p className="text-md text-gray-500 mt-2">
        for smarter recruitment decisions
      </p>

      {/* Microphone Icon */}
      <div className="absolute bottom-8">
        <button className="p-4 rounded-full bg-black text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="w-6 h-6"
          >
            <path d="M8 12a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v4a3 3 0 0 0 3 3zm3.5-3a.5.5 0 0 1 1 0 4.5 4.5 0 0 1-4 4.473V15.5a.5.5 0 0 1-1 0v-2.027A4.5 4.5 0 0 1 3.5 9a.5.5 0 0 1 1 0 3.5 3.5 0 0 0 7 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
