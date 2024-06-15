import { useId } from "react";
import { PiMagnifyingGlassDuotone } from "react-icons/pi";
import css from "./SearchBar.module.css";

const SearchBar = () => {
  const inputId = useId();
  return (
    <header className={css.header}>
      <form className={css.form}>
        <label htmlFor={inputId} className={css.container}>
          <input
            className={css.input}
            type="text"
            name="searchInput"
            id={inputId}
            placeholder="Search images and photos"
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
