import { create } from "zustand";

type User = {
    name: string;
    role: string;
}

type AuthUser = {
    user: User | null;
}

type AuthAction = {
    setUser: (user: AuthUser["user"])=>void;
}

const useAuth = create<AuthUser & AuthAction>((set)=>({
    user: null,
    setUser: (user)=>set(()=>({user: user}))
}));

export default useAuth;