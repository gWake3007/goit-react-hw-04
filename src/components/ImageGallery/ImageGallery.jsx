import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ list }) => (
  <ul className={css.list}>
    {list.map((item) => (
      <li key={item.id}>
        <ImageCard src={item.urls.small} alt={item.alt_description} />
      </li>
    ))}
  </ul>
);

export default ImageGallery;
