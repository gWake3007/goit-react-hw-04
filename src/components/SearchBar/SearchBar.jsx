import { useId } from "react";
import { PiMagnifyingGlassDuotone } from "react-icons/pi";
import css from "./SearchBar.module.css";

const SearchBar = () => {
  const inputId = useId();
  return (
    <header className={css.header}>
      <form className={css.form}>
        <label htmlFor={inputId}></label>
        <div className={css.container}>
          <input
            type="text"
            name="searchInput"
            id={inputId}
            placeholder="Search images and photos"
          />
          <button className={css.btn} type="submit">
            <PiMagnifyingGlassDuotone />
          </button>
        </div>
      </form>
    </header>
  );
};

export default SearchBar;
