export type CharacterType = "letters" | "numbers" | "alphanumeric";

export type StrengthLabel = "Weak" | "Fair" | "Strong" | "Very strong";

export interface PasswordStrength {
  score: number; // 1 to 4
  label: StrengthLabel;
}

export interface PasswordHistoryEntry {
  id: string;
  value: string;
  createdAt: string;
}
