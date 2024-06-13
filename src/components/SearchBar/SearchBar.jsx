import css from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <header>
      <form className={css.form}>
        <input
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
