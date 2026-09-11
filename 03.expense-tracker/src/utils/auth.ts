export const USER_KEY = "user";
export const MEMBER_SINCE_KEY = "membership";

export const loadUser = (): string | null => {
  try {
    return localStorage.getItem(USER_KEY || "");
  } catch {
    return "";
  }
};

export const saveUser = (name: string): void => {
  try {
    localStorage.setItem(USER_KEY, name);

    if (!localStorage.getItem(MEMBER_SINCE_KEY)) {
      localStorage.setItem(MEMBER_SINCE_KEY, new Date().toISOString());
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export const clearUser = (): void => {
  try {
    localStorage.removeItem(USER_KEY);
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getMemberSince = () => {
  try {
    return localStorage.getItem(MEMBER_SINCE_KEY) || new Date().toISOString();
  } catch {
    return new Date().toISOString();
  }
};

export const getInitials = (name: string): string =>
  name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("") || "?";
