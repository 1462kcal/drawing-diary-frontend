import { apiFetch } from "../../../api/client";
import type { User } from "../types/user";

export async function getMyProfile(): Promise<User> {
  return apiFetch("/api/users/me");
}
