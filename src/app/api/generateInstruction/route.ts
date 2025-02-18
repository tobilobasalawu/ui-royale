import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Store API key in .env.local
});

export async function POST() {
  try {
    console.log("API called: Generating instruction...");

    const prompt = `You are an AI that provides UI design challenges. 
    Given that the user UI components can only drag and drop the component name, generate a short and fun instruction for the user to create a design using them in 30 seconds. tell them that the drag and drop ui doesnt work the they can only chnsg e and dropp a name/text that respresnts the ui and with that and telll them the after 30 seconds the ,agcucian will stop them and generate s core for them`;

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
