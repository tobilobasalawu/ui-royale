'use client';
import { useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function LobbyManager({ lobbyCode }: { lobbyCode: string }) {
  const [lobbyData, setLobbyData] = useState<any>(null);

  useEffect(() => {
    const lobbyRef = doc(db, 'lobbies', lobbyCode);
    const unsubscribe = onSnapshot(lobbyRef, (doc) => {
      if (doc.exists()) {
        setLobbyData(doc.data());
      }
    });

    return () => unsubscribe();
  }, [lobbyCode]);

  return (
    <div>
      {lobbyData && (
        <>
          <h2>Lobby Code: {lobbyData.code}</h2>
          <p>Status: {lobbyData.status}</p>
          <p>Time Left: {lobbyData.timer} seconds</p>
        </>
      )}
    </div>
  );
}