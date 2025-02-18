export async function generateInstruction() {
  const response = await fetch("/api/generateInstruction", {
    // ✅ Fix the route
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch instruction"); // Handle errors
  }

  const data = await response.json();
  return data.instruction;
}
