const AUTHORIZATION_KEY = 'six-cities-token';

export type Token = string;

export function getToken(): Token {
  const token = localStorage.getItem(AUTHORIZATION_KEY);
  return token ?? '';
}

export function saveToken(token: Token): void {
  localStorage.setItem(AUTHORIZATION_KEY, token);
}

export function dropToken(): void {
  localStorage.removeItem(AUTHORIZATION_KEY);
}
