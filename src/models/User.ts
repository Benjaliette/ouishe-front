export enum UserRole {
  USER = "user",
  ADMIN = "admin",
  GUEST = "guest",
}

export interface User {
  id?: string;
  email?: string;
  username?: string;
  password?: string;
  avatarUrl?: string;
  role?: UserRole;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
}
