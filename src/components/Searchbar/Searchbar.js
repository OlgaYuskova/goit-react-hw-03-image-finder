import { Component } from 'react';
import { SearchbarCounteiner } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChangeText = evt => {
    this.setState({ query: evt.currentTarget.value.toLowerCase() });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.query.trim() === '') {
      return;
    }
    this.props.onSubmit(this.state.query);

    this.setState({ query: '' });
  };

  render() {
    return (
      <SearchbarCounteiner>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>
          <input
            type="text"
            autoComplete="off"
            name="text"
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChangeText}
          />
        </form>
      </SearchbarCounteiner>
    );
  }
}
