import axios from "axios";

const ACCESS_KEY = "qz_oKJwZpo3COUV3FvPGVWR9rLo7Tof8kbJXhmvCS2U";

const unsplashAPI = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`,
  },
});

export const getUnsplashAPI = async (serchQuery, page) => {
  const { data } = await unsplashAPI.get("/search/photos", {
    params: {
      query: serchQuery,
      per_page: 12,
      page,
    },
  });
  console.log(data.results);
  return data.results;
};
