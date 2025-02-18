// app/editor/page.tsx (Protected Page)
"use client";
import { useAuth, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { EditorLayout } from "@/components/editor/EditorLayout";
import { Header } from "@/components/editor/Header";

export default function EditorPage() {
  const { isLoaded, userId } = useAuth();
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (isLoaded && !userId) {
      router.push("/");
    }
  }, [isLoaded, userId, router]);

  if (!isLoaded || !userId) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        prompt="HOME PAGE FOR A SOCIAL MEDIA AGENCY'S WEBSITE"
        timeLeft="00:00"
        player1={user?.imageUrl || "/defaultImage.png"}
        player2="/defaultImage.png"
      />
      <EditorLayout />
    </div>
  );
}
