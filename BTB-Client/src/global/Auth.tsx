import { FC, ReactNode, useEffect, useState } from "react";
import { useAdmin } from "../hooks/useAdmin/useAdmin.tsx";
import { useAuth } from "../hooks/useAuth/useAuth.tsx";
import axios from "axios";

const Auth: FC<{ children: ReactNode }> = ({ children }) => {
  const { setIsAdmin } = useAdmin();
  const { setIsAuth } = useAuth();
  const [isLoading, setIsLoading] = useState(true); // state to track loading state

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/me", {
        withCredentials: true,
      });
      setIsAdmin(res.data.isAdmin);
      setIsAuth(true);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>
  }

  return <>{children}</>;
};

export default Auth;