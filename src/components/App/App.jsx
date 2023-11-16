import { Component } from "react";
import { GlobalStyle } from "../../GlobalStyle";

import { fetchImages } from "../../services/api";
import { Loader } from "../Loader/Loader";
import { Searchbar } from "../Searchbar/Searchbar";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { Button } from "../Button/Button";
import { Container } from "./App.styled";

export class App extends Component {
  state = {
    images: [],
    query: "",
    page: 1,
    totalPages: null,
    error: false,
    isLoading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      // робимо хттп запит
      // записуємо результат в img
      try {
        this.setState({ isLoading: true, error: false });
        const response = await fetchImages(query, page);

        this.setState((prevState) => {
          const { hits, totalHits } = response;
          return {
            images: [...prevState.images, ...hits],
            isLoading: false,
            totalPages: Math.ceil(totalHits / 12),
          };
        });
      } catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleSubmit = (newQuery) => {
    this.setState({
      query: newQuery,
      page: 1, //скидуєм номер сторінки
      images: [], //скидуєм масив зобр
    });
  };

  handleLoadMore = () => {
    //http запит
    this.setState((prevState) => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    const { isLoading, error, images, totalPages, page } = this.state;
    const galleryImages = images.length !== 0; //перевіряємо чи є зображення для завантаження
    const notLastPage = page < totalPages; //перевіряємо чи є ще сторінки для завантаження
    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} />

        {error && (
          <p>Oops! Something went wrong! Please try reloading this page!</p>
        )}

        <Loader isLoading={isLoading} />

        {galleryImages && <ImageGallery images={images}></ImageGallery>}

        {galleryImages && notLastPage && (
          <Button btnName="Load more" onClick={this.handleLoadMore} />
        )}

        <GlobalStyle />
      </Container>
    );
  }
}
