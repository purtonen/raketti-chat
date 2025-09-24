export type User = { name: string; };

export async function getCurrentUser(): Promise<User> {
  return fetch("/api/user").then((res) => res.json() as Promise<User>);
}