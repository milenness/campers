import axios from "axios";

export const instance = axios.create({
  baseURL: "https://campers-api.goit.study",
});

export async function fetchCampers(params = {}) {
  const cleanParams = Object.fromEntries(
    Object.entries(params).filter(
      (entry) => entry[1] !== "" && entry[1] !== null && entry[1] !== undefined,
    ),
  );

  const response = await instance.get("/campers", { params: cleanParams });
  return response.data;
}
