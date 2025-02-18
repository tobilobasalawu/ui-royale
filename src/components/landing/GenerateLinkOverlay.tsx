import { useContext } from "react";
import { Modal } from "@/components/ui/modal";
import { GenerateLinkForm } from "./GenerateLinkForm";
import {
  LandingPageContext,
  LandingPageContextType,
} from "@/contexts/LandingPageContext";

export function GenerateLinkOverlay({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { inviteLink } = useContext(
    LandingPageContext
  ) as LandingPageContextType;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      {!inviteLink ? (
        <GenerateLinkForm />
      ) : (
        <div className="flex flex-col items-center gap-6 p-6 bg-[#111111] rounded-lg border border-[#787878]">
          <h2 className="text-lg font-bold text-white">Share Invite Link to your opponent</h2>
          <input
            type="text"
            value={inviteLink}
            readOnly
            className="w-full p-2 bg-transparent text-white border border-gray-500 rounded-md"
          />
          <button
            onClick={() => {
              navigator.clipboard.writeText(inviteLink);
              window.location.href = "/lobby";
            }}
            className="bg-[#ADAEF8] text-black font-bold py-2 px-4 rounded-lg"
          >
            Copy Link
          </button>
        </div>
      )}
    </Modal>
  );
}
