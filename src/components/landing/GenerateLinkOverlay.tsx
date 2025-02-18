import { useState } from "react";
import { Modal } from "@/components/ui/modal";
import { GenerateLinkForm } from "./GenerateLinkForm";

interface GenerateLinkOverlayProps {
    isOpen: boolean;
    onClose: () => void;
    onGenerate?: (name: string, id: string) => void;
}

export function GenerateLinkOverlay({
    isOpen,
    onClose,
}: GenerateLinkOverlayProps) {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}>
            <GenerateLinkForm />
        </Modal>
    );
}
