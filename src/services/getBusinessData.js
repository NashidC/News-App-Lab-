import axios from "axios";

export default async function getBusinessData() {
  const apiKey = process.env.API_KEY;
  const url = process.env.BUSINESS_BASE_URL;
  const query = `${url}${apiKey}`;
  const response = await axios.get(query);
  const { data } = response;
  return data;
}