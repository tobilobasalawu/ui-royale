import { Header } from "@/components/editor/Header";
import { EditorLayout } from "@/components/editor/EditorLayout";

export default function EditorPage() {
    return (
        <div className="min-h-screen">
            <Header
                prompt="home page for a social media agency's website"
                timeLeft="00:00"
                player1="A"
                player2="B"
            />
            <EditorLayout />
        </div>
    );
}
