import { useState, useEffect, useCallback } from "react";
import "./App.css";
import { unsplashAPI } from "./api/unsplashAPI.js";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";

const App = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const setDataResp = useCallback(async () => {
    try {
      const resp = await unsplashAPI(query, page);
      setData((prev) => [...prev, ...resp]);
    } catch (err) {
      console.log(err);
    } finally {
      console.log("finally");
    }
  }, [query, page]);

  useEffect(() => {
    if (query) {
      setDataResp();
    }
  }, [query, page, setDataResp]);

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
      <SearchBar onSubmit={submitForm} />
      <ImageGallery list={data} />
      <LoadMoreBtn handleLoadMore={handleLoadMore} />
    </>
  );
};

export default App;
