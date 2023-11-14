import { Component } from "react";
import { ImageModal } from "../Modal/Modal";

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  handleModal = () => {
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };
  render() {
    const { image, largeImage } = this.props;

    return (
      <>
        <li onClick={this.handleModal}>
          <img src={image} alt="" />
        </li>
        {this.isModalOpen && (
          <ImageModal
            isOpen={this.isModalOpen}
            onClose={this.handleModal}
            largeImg={largeImage}
          />
        )}
      </>
    );
  }
}
