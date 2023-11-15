import styled from "styled-components";
import ReactModal from "react-modal";

export const ModalStyled = styled(ReactModal)`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1200;
`;
export const ModalDiv = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;
