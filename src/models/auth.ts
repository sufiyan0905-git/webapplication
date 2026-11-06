export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthUser {
  userId: string;
  email: string;
  role: string;
}

export interface LoginResponse extends AuthUser {
  token: string;
}