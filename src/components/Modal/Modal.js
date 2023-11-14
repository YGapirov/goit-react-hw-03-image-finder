import Modal from "react-modal";
import { ModalOverlay } from "./Modal.styled";
Modal.setAppElement("#root");

export const ImageModal = ({ largeImg, isModalOpen, onClose }) => {
  return (
    <ModalOverlay>
      <Modal isOpen={isModalOpen} onRequestClose={onClose}>
        <img src={largeImg} alt="" />
      </Modal>
    </ModalOverlay>
  );
};
