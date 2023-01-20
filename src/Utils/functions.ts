import axios, { AxiosError } from "axios";

export const URLRegex =
  /(https?:\/\/(www\.)?)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/

export const localShortnedURLs: string[] = JSON.parse(
  localStorage.getItem("shortnedURLs") || "[]"
)

export const gotinyAPI = axios.create({
  baseURL: "https://gotiny.cc/api",
  headers: {
    "Content-Type": "application/json"
  },
  transformRequest: [
    (data) => {
      return JSON.stringify({ input: data })
    }
  ]
})