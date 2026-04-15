export const PROFILE_COLORS = [
  { id: "red",    hex: "#ef4444", light: "#fee2e2" },
  { id: "blue",   hex: "#3b82f6", light: "#dbeafe" },
  { id: "green",  hex: "#22c55e", light: "#dcfce7" },
  { id: "yellow", hex: "#eab308", light: "#fef9c3" },
  { id: "purple", hex: "#6c47ff", light: "#ede8ff" },
  { id: "orange", hex: "#f97316", light: "#ffedd5" },
];

export const PROFILE_AVATARS = ["🦊", "🐼", "🦁", "🐸", "🦋", "🐙"];

export const GRADES = [
  "Kindergarten",
  "Grade 1", "Grade 2", "Grade 3",
  "Grade 4", "Grade 5", "Grade 6",
  "Grade 7", "Grade 8",
];

export function getProfileColor(colorId) {
  return PROFILE_COLORS.find((c) => c.id === colorId) ?? PROFILE_COLORS[4];
}
