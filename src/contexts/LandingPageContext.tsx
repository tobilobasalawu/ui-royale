import { createContext, useState } from "react";
import { nanoid } from "nanoid";
import { ref, set } from "firebase/database";
import { db } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export interface LandingPageContextType {
  isOverlayOpen: boolean;
  setIsOverlayOpen: (isOpen: boolean) => void;
  error: boolean;
  setError: (error: boolean) => void;
  generateLink: (event: React.FormEvent) => void;
  playerOne: Player;
  inviteLink: string | null;
}

interface Player {
  name: string | null;
  id: string | null;
}

export const LandingPageContext = createContext<LandingPageContextType | null>(
  null
);

export function LandingPageContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [error, setError] = useState(false);
  const [playerOne, setPlayerOne] = useState<Player>({
    name: null,
    id: null,
  });
  const [inviteLink, setInviteLink] = useState<string | null>(null);
  const router = useRouter();

  function generateLink(event: React.FormEvent) {
    event.preventDefault();

    if (!playerOne.name || playerOne.name.trim() === "") {
      setError(true);
      return;
    }

    setError(false);
    const uniqueId = nanoid(10);

    setPlayerOne((prev) => ({
      ...prev,
      id: uniqueId,
    }));

    // Store lobby in Firebase
    const lobbyRef = ref(db, `lobbies/${uniqueId}`);
    set(lobbyRef, {
      code: uniqueId,
      players: { [uniqueId]: { name: playerOne.name, id: uniqueId } },
      status: "waiting",
      createdAt: Date.now(),
    });

    // Generate invite link and update state
    const link = `${window.location.origin}/lobby?code=${uniqueId}`;
    setInviteLink(link);
  }

  return (
    <LandingPageContext.Provider
      value={{
        isOverlayOpen,
        setIsOverlayOpen,
        error,
        setError,
        generateLink,
        playerOne,
        inviteLink,
      }}
    >
      {children}
    </LandingPageContext.Provider>
  );
}
