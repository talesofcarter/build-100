import { type PasswordHistoryEntry } from "../types";

export const mockPassword = "xK9$mPz2#vLwQr8";
export const strengthScore = 4;
export const strengthLabel = "Very strong";

export const mockHistory: PasswordHistoryEntry[] = [
  { id: "1", value: "aB3!kLm9pQr2xY7", createdAt: "2m ago" },
  { id: "2", value: "T7#nWq4$eRt8uIo1", createdAt: "1h ago" },
  { id: "3", value: "zX2@bN5vC8mK1jH", createdAt: "Yesterday" },
  { id: "4", value: "Qw8&rT3vNm6Xk1Ld", createdAt: "2 days ago" },
  { id: "5", value: "Hj4#Bp7Ln2Wq9Zc", createdAt: "3 days ago" },
];
