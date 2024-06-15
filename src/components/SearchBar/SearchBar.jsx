import { useState } from "react";
import { PiMagnifyingGlassDuotone } from "react-icons/pi";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
  };
  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="searchInput"
          autoComplete="off"
          autoFocus
          value={input}
          placeholder="Search images and photos"
          onChange={(e) => setInput(e.target.value)}
        />
        <button className={css.btn} type="submit">
          <PiMagnifyingGlassDuotone className={css.svg} />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
