import css from "./ImageCard.module.css";

const ImageCard = ({ item, onImageClick }) => {
  return (
    <div className={css.card}>
      <img
        onClick={() => onImageClick(item)}
        className={css.img}
        src={item.urls.small}
        alt={item.alt_description}
      />
    </div>
  );
};

export default ImageCard;
