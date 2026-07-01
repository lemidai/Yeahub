import { User } from '../model/types';

const STORAGE_KEY = 'access_token';
const USER_DATA = 'user_data';

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

export function getUserDataFromLS(): User | null {
  try {
    const data = localStorage.getItem(USER_DATA);

    if (!data) return null;

    const parsed = JSON.parse(data) as User;

    return parsed;
  } catch {
    return null;
  }
}
export function setUserDataToLS(data: User): void {
  localStorage.setItem(USER_DATA, JSON.stringify(data));
}

export function clearUserDataInLS(): void {
  localStorage.removeItem(USER_DATA);
}
