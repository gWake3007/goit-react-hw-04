import { useEffect } from "react";
import "./App.css";
import { getUnsplashAPI } from "./api/api-unsplash.js";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  // const [data, setData] = useState([]);

  useEffect(() => {
    const setDataResp = async () => {
      try {
        await getUnsplashAPI("nature", 1);
      } catch (err) {
        console.log(err);
      } finally {
        console.log("finally");
      }
    };
    setDataResp();
  }, []);
  return (
    <>
      <SearchBar />
    </>
  );
}

export default App;
