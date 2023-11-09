"use client";
import { useEffect, useState } from "react";
import Navber from "./Navber";

const MainNavber = () => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    // Fetch data from an external API
    fetch("https://kawaiisss-server.vercel.app/categories")
      .then((response) => response.json())
      .then((result) => {
        setCategories(result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <Navber categories={categories} />{" "}
    </>
  );
};

export default MainNavber;
