import { useState, useContext } from "react";
import { Button } from "@/components/ui/button";
import {
  LandingPageContext,
  LandingPageContextType,
} from "@/contexts/LandingPageContext";

export function GenerateLinkForm() {
  const { error, generateLink, setError, playerOne } = useContext(
    LandingPageContext
  ) as LandingPageContextType;
  const [name, setName] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setError(false); // Clear error message
    if (!name.trim()) {
      setError(true);
      return;
    }

    // Update player name in context before generating link
    playerOne.name = name;
    generateLink(event);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center w-[335px] p-10 gap-10 rounded-lg bg-[#111111] border border-[#787878]"
    >
      {/* Input Fields */}
      <div className="flex flex-col items-center gap-4">
        <label
          htmlFor="playerName"
          className="text-[18px] leading-[18px] font-medium text-[#e8e8e8] font-manrope"
        >
          Your name (can be a nickname)
        </label>

        <div className="flex items-center justify-center w-full h-[40px] px-3 py-3 rounded-[6px] border border-[#787878]">
          <input
            id="playerName"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className={`w-full bg-transparent text-base leading-4 text-[#999999] placeholder:text-[#999999] focus:outline-none ${
              error ? "border-red-500" : ""
            }`}
          />
        </div>
        {error && (
          <p className="text-red-500 text-xs self-start">
            Please type in a name.
          </p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full h-fit px-6 py-3 font-manrope rounded-[6px] bg-[#ADAEF8] hover:bg-[#9b9cf0] text-[#111111] font-bold text-lg leading-[11px] shadow-[0px_4px_8px_rgba(173,174,248,0.25)]"
      >
        Generate invite link
      </Button>
    </form>
  );
}
