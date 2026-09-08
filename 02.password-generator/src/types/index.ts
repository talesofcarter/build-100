export type CharacterType = "letters" | "numbers" | "alphanumeric";

export type StrengthLabel = "Weak" | "Fair" | "Strong" | "Very strong";

export type ToastState = { message: string; type: "success" | "error" } | null;

export interface PasswordStrength {
  score: number;
  label: StrengthLabel;
}

export interface PasswordHistoryEntry {
  id: string;
  value: string;
  createdAt: string;
}
