import { useQuery } from "tenstack-query";
import useAxiosLocal from "../useAxiosLocal/useAxiosLocal";

const useFetchData = (url, queryKey) => {
  const axiosLocal = useAxiosLocal();

  const fetchData = async () => {
    try {
      const response = await axiosLocal.get(url);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  };

  const { data, isPending } = useQuery({
    queryKey: [queryKey],
    queryFn: fetchData,
  });

  return { data, isPending };
};

export default useFetchData;