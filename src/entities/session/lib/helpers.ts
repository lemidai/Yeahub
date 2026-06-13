const STORAGE_KEY = 'access_token';

export function getTokenFromLS(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

export function setTokenToLS(token: string): void {
  localStorage.setItem(STORAGE_KEY, token);
}

export function clearTokenInLS(): void {
  localStorage.removeItem(STORAGE_KEY);
}
