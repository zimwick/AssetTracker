import { useState, useCallback } from "react";

function useGet(BASE_URL, URL_PATH) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState([]);

  // Abstracted fetching logic into a separate function
  const fetchWithToken = useCallback(
    async (token, isRetry = false) => {
      const fetchResponse = await fetch(`${BASE_URL}/${URL_PATH}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!fetchResponse.ok) {
        if (fetchResponse.status !== 401 || isRetry) {
          const errorText = await fetchResponse.text(); // Use .text() in case there's no JSON response
          const errorMessage = errorText
            ? JSON.parse(errorText).message
            : "An error occurred";
          setError(new Error(errorMessage));
        }
        return null;
      }

      return await fetchResponse.json(); // Assuming successful response is always JSON
    },
    [BASE_URL, URL_PATH]
  );

  const getData = useCallback(
    async (token) => {
      setIsLoading(true);
      try {
        let jsonResponse = await fetchWithToken(token);
        if (!jsonResponse) {
          // Attempt to refresh token if the response was null (indicative of a 401 error)
          const userId = sessionStorage.getItem("userId");
          const refreshToken = sessionStorage.getItem("refreshToken");

          const refreshResponse = await fetch(
            `${BASE_URL}/Account/refreshtoken`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                userId,
                token,
                refreshToken,
              }),
            }
          );

          if (refreshResponse.ok) {
            const newTokens = await refreshResponse.json();
            sessionStorage.setItem("userId", newTokens.userId);
            sessionStorage.setItem("token", newTokens.token);
            sessionStorage.setItem("refreshToken", newTokens.refreshToken);

            // Retry the original request here with the new token
            jsonResponse = await fetchWithToken(newTokens.token, true);
            if (jsonResponse) {
              setResponse(jsonResponse);
              return; // Exit early since we've successfully handled the retry
            }
          } else {
            setError(new Error("Failed to refresh token"));
          }
        } else if (jsonResponse) {
          setResponse(jsonResponse); // Set response if the initial request or retry was successful
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    },
    [fetchWithToken, BASE_URL]
  );

  return { getData, isLoading, error, response };
}

export default useGet;
