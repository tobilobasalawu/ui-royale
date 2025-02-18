import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST() {
  try {
    console.log("API called: Generating instruction...");

    const prompt = `You are an AI that provides UI design challenges. Given that the user can only drag and drop component names (icons will appear as text), generate a short, fun instruction with these requirements:
    1. Explain they have 30 seconds to create a design
    2. Mention icons appear as text names
    3. Add Gen-Z slang like "skibidi", "pop", "no cap"
    4. Position yourself as the all-powerful game boss
    5. Encourage dragging many components for higher scores
    6. Include emojis and humor
    7. Keep it under 150 characters`;

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: prompt,
        },
      ],
      max_tokens: 200,
    });

    if (!response.choices[0]?.message?.content) {
      throw new Error("No content in OpenAI response");
    }

    return new NextResponse(
      JSON.stringify({ instruction: response.choices[0].message.content }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  } catch (error) {
    console.error("Error generating instruction:", error);
    return new NextResponse(
      JSON.stringify({
        error: "Failed to generate instruction",
        details: error.message,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
}
