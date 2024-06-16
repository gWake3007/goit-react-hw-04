import css from "./ImageModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onRequestClose, style, image }) => {
  return (
    <div>
      <Modal
        style={style}
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        image={image}
      >
        <button className={css.btn} type="button" onClick={onRequestClose}>
          close
        </button>
        <img src={image.urls.regular} alt={image.alt_description} />
      </Modal>
    </div>
  );
};

export default ImageModal;
