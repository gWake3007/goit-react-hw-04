import { useId, useState } from "react";
import { PiMagnifyingGlassDuotone } from "react-icons/pi";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [input, setInput] = useState("");
  const inputId = useId();
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
  };
  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <label htmlFor={inputId} className={css.container}>
          <input
            className={css.input}
            type="text"
            name="searchInput"
            id={inputId}
            autoComplete="off"
            autoFocus
            value={input}
            placeholder="Search images and photos"
            onChange={(e) => setInput(e.target.value)}
          />
          <button className={css.btn} type="submit">
            <PiMagnifyingGlassDuotone className={css.svg} />
          </button>
        </label>
      </form>
    </header>
  );
};

export default SearchBar;
