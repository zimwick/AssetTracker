import { useState } from "react";

// Renaming to usePostHandler to follow React's custom hook naming convention
function usePost(BASE_URL, URL_PATH) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState([]);

  const postData = async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/${URL_PATH}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
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
  };

  return { postData, isLoading, error, response };
}

export default usePost;
