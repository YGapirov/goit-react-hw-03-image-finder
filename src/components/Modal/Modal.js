import Modal from "react-modal";
import { ModalOverlay } from "./Modal.styled";
Modal.setAppElement("#root");

export const ImageModal = ({ largeImg, isModalOpen, closeModal }) => {
  return (
    <ModalOverlay>
      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        <img src={largeImg} alt="" />
      </Modal>
    </ModalOverlay>
  );
};
