import { Component } from 'react';

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      // робимо хттп запит
      // записуємо результат в img
    }
  }

  handleSubmit = newQuery => {
    this.serState({
      query: newQuery,
      page: 1, //скидуєм номер сторінки
      images: [], //скидуєм масив зобр
    });
  };

  handleLoadMore = () => {
    //http запит
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}></form>
        <div>Gallery</div>
        <button>Load more</button>
      </div>
    );
  }
}
