import { useState, useEffect, useCallback } from "react";
import "./App.css";
import { unsplashAPI } from "./api/unsplashAPI.js";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import Loader from "./components/Loader/Loader.jsx";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";
import ImageModal from "./components/ImageModal/ImageModal.jsx";

const App = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);

  const setDataResp = useCallback(async () => {
    try {
      setError(false);
      setLoading(true);
      const resp = await unsplashAPI(query, page);
      setData((prev) => [...prev, ...resp]);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
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

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
  };
  return (
    <>
      <SearchBar onSubmit={submitForm} />
      {error && <ErrorMessage />}
      <ImageGallery list={data} onImageClick={openModal} />
      {loading && <Loader />}
      {data.length > 0 && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        image={modalIsOpen}
      />
    </>
  );
};

export default App;
