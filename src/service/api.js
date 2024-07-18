import axios from "axios";

const apiUrl = "https://api.heritagecapitals.com.ng/api/Slider";
const apiUr = "https://api.heritagecapitals.com.ng/api/Services";

export const fetchData = async () => {
  const apiKey = "your_api_key_here"; // password created by the backend for security and to track usage

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${apiKey}`, // Include this line only if the API requires an API key
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(
        error.response.data.message || "Network response was not ok"
      );
    } else {
      throw new Error(error.message);
    }
  }
};
