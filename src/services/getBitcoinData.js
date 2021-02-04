import axios from "axios";

export default async function getBitcoinData() {
  const apiKey = process.env.API_KEY;
  const url = process.env.BITCOIN_BASE_URL;
  console.log(url);
  return await axios.get(`${url}${apiKey}`).then(({ data }) => data);
}



