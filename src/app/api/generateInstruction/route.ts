import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Store API key in .env.local
});

export async function POST() {
  try {
    console.log("API called: Generating instruction...");

    const prompt = `You are an AI that provides UI design challenges. 
    Given that the user UI components can only drag and drop the component name, generate a short and fun instruction for the user to create a design using them in 30 seconds. 
    tell them that the drag and drop ui doesnt work thatyou chnage the ion to text. so if try to drag and drop th eicon only the name of the icon appears and telll them the after 30 seconds the,
    program will stop them and generate score for them. Tell them you decide what score they get after, add words like skibidi, pop, yk what what am saying. To make it fun. 
    Also metion that you're the boss that everything in this game is runned and control by you. You can stop the editor from working if you want to can freeze the components.
    Make sure you explain it to them. Tell them is better to drag as much components as they can on the canvas to get higer score. Add emojis as well.
`;

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "system", content: prompt }],
    });

    console.log("AI Response:", response);

    return NextResponse.json({
      instruction: response.choices[0].message.content,
    });
  } catch (error) {
    console.error("Error generating instruction:", error);
    return NextResponse.json(
      { error: "Failed to generate instruction." },
      { status: 500 }
    );
  }
}
