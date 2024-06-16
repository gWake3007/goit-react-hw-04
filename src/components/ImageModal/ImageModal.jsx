import css from "./ImageModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  return (
    <Modal
      className={css.modal}
      overlayClassName={css.overlay}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      image={image}
    >
      <button className={css.btn} type="button" onClick={onRequestClose}>
        close
      </button>
      <img
        src={image?.urls?.regular}
        alt={image?.alt_description}
        className={css.img}
      />
    </Modal>
  );
};

export default ImageModal;
