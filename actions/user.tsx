"use client";

import axios from "axios";

export const getCredits = async () => {
  try {
    const { data } = await axios.get("/api/auth");
    return { response: "success", credits: data.user.credits };
  } catch (error) {
    console.log("[ERROR_GET_CREDITS]", error);
    return { response: "error", msg: "Error al obtener los créditos" };
  }
};
