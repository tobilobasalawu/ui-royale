import { createContext, useState } from "react";
import { nanoid } from "nanoid";

export interface LandingPageContextType {
    isOverlayOpen: boolean;
    setIsOverlayOpen: (isOpen: boolean) => void;
    error: boolean;
    setError: (error: boolean) => void;
    generateLink: (event: React.FormEvent) => void;
    playerOne: Player;
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

    function generateLink(event: React.FormEvent) {
        event.preventDefault();
        if (!playerOne.name?.trim()) {
            setError(true);
            return;
        }
        const uniqueId = nanoid(10);
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
            }}>
            {children}
        </LandingPageContext.Provider>
    );
}
