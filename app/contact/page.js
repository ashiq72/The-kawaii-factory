"use client";
import { useThemeContext } from "@app/context/store";
import ProfilePhoto from "@components/Shared/MainTopNavber/ProfilePhoto";

export default function Contact() {
  const { color } = useThemeContext();
  // console.log("User profile: ", color);
  return (
    <>
      <h1 style={{ color: color }}>Main page </h1>
      <p>Current color: {color}</p>

      <p>
        <h1>contact page</h1>
        <ProfilePhoto />
      </p>
    </>
  );
}
