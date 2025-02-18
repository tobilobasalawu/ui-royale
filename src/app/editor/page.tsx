import { Header } from "@/components/editor/Header";
import { EditorLayout } from "@/components/editor/EditorLayout";

export default function EditorPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header
        prompt="home page for a social media agency's website"
        timeLeft="00:00"
        player1="A"
        player2="B"
      />
      <div className="flex-1 flex flex-col md:flex-row">
        <EditorLayout />
        {/* Add any additional responsive components or layout adjustments here */}
      </div>
    </div>
  );
}
