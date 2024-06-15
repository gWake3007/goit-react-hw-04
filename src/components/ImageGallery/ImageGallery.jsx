import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ list }) => (
  <ul className={css.list}>
    {list.map((item) => (
      <li key={item.id}>
        <ImageCard item={item} />
      </li>
    ))}
  </ul>
);

export default ImageGallery;
