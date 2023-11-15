import Modal from "react-modal";
import { ModalStyled, ModalDiv } from "./Modal.styled";
Modal.setAppElement("#root");

export const ImageModal = ({ largeImg, isOpen, onClose }) => {
  return (
    <ModalDiv>
      <ModalStyled isOpen={isOpen} onRequestClose={onClose}>
        <img src={largeImg} alt="" />
      </ModalStyled>
    </ModalDiv>
  );
};
