import axios from "axios";

export const instance = axios.create({
  baseURL: "https://campers-api.goit.study",
});

export async function fetchCampers(params = {}) {
  const cleanParams = Object.fromEntries(
    Object.entries(params).filter(
      ([, value]) => value !== "" && value !== null && value !== undefined,
    ),
  );

  const response = await instance.get("/campers", { params: cleanParams });
  return response.data;
}

export async function fetchCampersFilters() {
  const response = await instance.get("/campers/filters");
  return response.data;
}

export async function fetchCamperById(id: string) {
  const response = await instance.get(`/campers/${id}`);
  return response.data;
}

export async function fetchCamperReviews(id: string) {
  const response = await instance.get(`/campers/${id}/reviews`);
  return response.data;
}

interface BookingData {
  name: string;
  email: string;
}

export async function sendBookingRequest(camperId: string, data: BookingData) {
  const response = await instance.post(
    `/campers/${camperId}/booking-requests`,
    data,
  );
  return response.data;
}