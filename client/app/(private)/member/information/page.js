"use client";
import { useState, useEffect } from "react";

export default function Information() {
  const [username, setUserName] = useState(null);
  const [birthday, setBirthday] = useState(null);
  const [sex, setSex] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);

  useEffect(async () => {
    const token = localStorage.getItem("token");

    try {
      const res = await fetch("http//localhost:3030/member/login", {
        method: POST,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch");
      }

      const data = await res.json();
    } catch (err) {
      console.log(err.message);
    }
  }, []);

  return (
    <>
      <div className="border-red">
        <div>Person Information:</div>
        <div>Username:</div>
        <div>Date of Birthday:</div>
        <div>Sex:</div>
      </div>
      <div className="border-green">
        <div>Email:</div>
        <div>Phone Number:</div>
      </div>
    </>
  );
}
