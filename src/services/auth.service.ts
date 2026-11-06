import { LoginRequest, LoginResponse } from "@/models/auth";
import api from "./api";

export const login = async (
    credentials: LoginRequest
): Promise<LoginResponse> => {
    const response = await api.post<LoginResponse>(
        "/Auth/Login",
        credentials
    );

    return response.data;
};