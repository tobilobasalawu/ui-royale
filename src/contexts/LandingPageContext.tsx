import { createContext, useState } from "react";
import { nanoid } from "nanoid";
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
    if (!playerOne.name?.trim()) {
      setError(true);
      return;
    }

    const uniqueId = nanoid(6); // Generate a short lobby ID
    const inviteLink = `${window.location.origin}/lobby?lobbyCode=${uniqueId}`;

    navigator.clipboard.writeText(inviteLink).then(() => {
      alert("Invite link copied! Paste the link in a new tab.");
    });

    setPlayerOne({ name: playerOne.name, id: uniqueId });
    setIsOverlayOpen(false);
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
