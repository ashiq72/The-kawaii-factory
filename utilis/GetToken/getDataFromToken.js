import Cookies from "js-cookie";

export const fetchUserData = async () => {
  const token = Cookies.get("userToken");
  if (token) {
    try {
      const apiUrl = "http://localhost:5000/api/v1/user-active";

      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      return data; //
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  }
};
