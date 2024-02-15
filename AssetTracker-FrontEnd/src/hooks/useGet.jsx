import { useState, useCallback } from "react";

function useGet(BASE_URL, URL_PATH) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState([]);

  // Wrap getData with useCallback
  const getData = useCallback(
    async (token) => {
      setIsLoading(true);
      try {
        const response = await fetch(`${BASE_URL}/${URL_PATH}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errorResponse = await response.json();
          setError(new Error(errorResponse.message || "An error occurred"));
        } else {
          const jsonResponse = await response.json();
          setResponse(jsonResponse);
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    },
    [BASE_URL, URL_PATH]
  ); // Dependencies array

  return { getData, isLoading, error, response };
}

export default useGet;
