import { NextResponse } from 'next/server';
import { joinLobby } from '@/lib/firestore';

export async function POST(request: Request) {
  try {
    const { userId, lobbyCode } = await request.json();
    if (!userId || !lobbyCode) return NextResponse.json({ error: "User ID and lobby code required" }, { status: 400 });

    await joinLobby(userId, lobbyCode);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
