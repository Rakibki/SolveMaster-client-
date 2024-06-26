import { useContext } from "react";
import useAxiosLocal from "../useAxiosLocal/useAxiosLocal";
import { useQuery } from "@tanstack/react-query";
import { authContext } from "../../provider/authProvider/AuthProvider";

const useGetRole = () => {
  const axiosLocal = useAxiosLocal();
  const { user } = useContext(authContext);

  const { data, isPending } = useQuery({
    queryKey: ["GetRole"],
    queryFn: async () => {
      const response = await axiosLocal.get(`/api/v1/userRole/${user?.email}`);
      return response?.data?.role;
    },
  });

  return data;
};

export default useGetRole;
