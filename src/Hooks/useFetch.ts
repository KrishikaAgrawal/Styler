import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig } from "axios";

// Get token from localStorage or sessionStorage
const getToken = () => localStorage.getItem("authToken");


const SERVER_URL = import.meta.env.VITE_SERVER_URL;

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const useFetch = <T>(
  url: string,
  options?: AxiosRequestConfig
): FetchState<T> => {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      setState({ data: null, loading: true, error: null });

      const fullUrl = `${SERVER_URL}/api/v1/${url}`;
      const token = getToken(); // Get token
      console.log(token);

      console.log("Fetching from:", fullUrl);
      console.log("Using Token:", token);

      try {
        const response = await axios.get<T>(fullUrl, {
          ...options,
          headers: {
            Authorization: token ? `Bearer ${token}` : "", // Attach token
            ...options?.headers,
          },
          // withCredentials: true, // Ensure credentials are sent if needed
        });

        setState({ data: response.data, loading: false, error: null });
      } catch (error) {
        console.error("Axios Error:", error);
        setState({
          data: null,
          loading: false,
          error: axios.isAxiosError(error)
            ? error.response?.data?.message || error.message
            : "Unexpected error",
        });
      }
    };

    fetchData();
  }, [url, options]);

  return state;
};

export default useFetch;
