import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ handleLoadMore }) => {
  return (
    <div className={css.container}>
      <button onClick={handleLoadMore} className={css.loadMoreBtn}>
        LoadMoreBtn
      </button>
    </div>
  );
};

export default LoadMoreBtn;
