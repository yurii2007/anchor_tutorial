import { Component } from 'react';
import { HeaderElem } from './SearchBar.styled';

export class SearchBar extends Component {
  state = {
    query: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(evt.target.query.value);
    this.setState({ query: '' });
  };

  onChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <HeaderElem>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            name="query"
            value={this.state.value}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            required
          />
        </form>
      </HeaderElem>
    );
  }
}