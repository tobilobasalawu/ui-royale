import { NextResponse } from 'next/server';
import { createLobby } from '@/lib/firestore';

export async function POST(request: Request) {
  try {
    const { userId } = await request.json();
    if (!userId) return NextResponse.json({ error: "User ID required" }, { status: 400 });

    const lobbyCode = await createLobby(userId);
    return NextResponse.json({ code: lobbyCode });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
