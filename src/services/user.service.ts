import { AddUserRequest, User } from "@/models/user";
import api from "./api";

const USER_URL = "/User";

export const userService = {

    // Get all users
    getUsers: async (): Promise<User[]> => {
        const response = await api.get<User[]>(`${USER_URL}/GetUsersList`);
        return response.data;
    },

    // Get user by ID
    getUserById: async (id: string): Promise<User> => {
        const response = await api.get<User>(`${USER_URL}/${id}`);
        return response.data;
    },

    // Add user
    addUser: async (data: AddUserRequest): Promise<User> => {
        const response = await api.post<User>(`${USER_URL}/AddUser`, data);
        return response.data;
    },

    // Update user
    updateUser: async (
        id: string,
        data: AddUserRequest
    ): Promise<User> => {
        const response = await api.put<User>(
            `${USER_URL}/${id}`,
            data
        );
        return response.data;
    },

    // Delete user
    deleteUser: async (id: string): Promise<void> => {
        await api.delete(`${USER_URL}/${id}`);
    },
};