import { useEffect, useState } from "react";
import "./App.css";
import { getUnsplashAPI } from "./api/api-unsplash.js";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("nature");

  useEffect(() => {
    const setDataResp = async () => {
      try {
        const dataApi = await getUnsplashAPI(query, page);
        setData((...prev) => [...prev, ...dataApi]);
      } catch (err) {
        console.log(err);
      } finally {
        console.log("finally");
      }
    };
    setDataResp();
  }, [query, page]);

  const submitForm = (searchQuery) => {
    setQuery(searchQuery);
    setData([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };
  return (
    <>
      <SearchBar submit={submitForm} />
      <ImageGallery list={data} />
      <LoadMoreBtn handleLoadMore={handleLoadMore} />
    </>
  );
}

export default App;
