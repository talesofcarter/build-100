import { describe, it, expect, beforeEach } from "vitest";
import {
  loadUser,
  saveUser,
  clearUser,
  getInitials,
  USER_KEY,
  MEMBER_SINCE_KEY,
} from "./auth";

describe("getInitials", () => {
  it("returns initials from a two-word name", () => {
    expect(getInitials("Kelvin Juma")).toBe("KJ");
  });

  it("caps at two initials for longer names", () => {
    expect(getInitials("Kelvin Otieno Juma")).toBe("KO");
  });

  it("returns a placeholder for empty input", () => {
    expect(getInitials("   ")).toBe("?");
  });
});

describe("saveUser / loadUser", () => {
  beforeEach(() => localStorage.clear());

  it("persists and reloads the user's name", () => {
    saveUser("Jane Doe");
    expect(loadUser()).toBe("Jane Doe");
  });

  it("sets membership date only on first save", () => {
    saveUser("Jane Doe");
    const firstDate = localStorage.getItem(MEMBER_SINCE_KEY);

    saveUser("Jane Doe"); // logging in again shouldn't reset the date

    expect(localStorage.getItem(MEMBER_SINCE_KEY)).toBe(firstDate);
  });
});

describe("clearUser", () => {
  beforeEach(() => localStorage.clear());

  it("removes the session but keeps membership history", () => {
    saveUser("Jane Doe");
    clearUser();

    expect(localStorage.getItem(USER_KEY)).toBeNull();
    expect(localStorage.getItem(MEMBER_SINCE_KEY)).not.toBeNull();
  });
});
