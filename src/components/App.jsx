import { Component } from "react";
import { GlobalStyle } from "./GlobalStyle";

import { fetchImages } from "./services/api";
import { RotatingLines } from "react-loader-spinner";

import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";

export class App extends Component {
  state = {
    images: [],
    query: "",
    page: 1,
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
        const initialImages = await fetchImages(query, page);

        this.setState({ images: initialImages });
      } catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleSubmit = (newQuery) => {
    this.serState({
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
    const { isLoading, error, images } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        {isLoading && (
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        )}
        {error && (
          <p>Oops! Something went wrong! Please try reloading this page!</p>
        )}
        {/* <ImageGallery gallery={images}></ImageGallery> */}
        <Button btnName="Load more" onClick={this.handleLoadMore} />
        <GlobalStyle />
      </div>
    );
  }
}
