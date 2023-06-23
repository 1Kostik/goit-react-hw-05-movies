import { useState } from 'react';
import {
  Search,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './SearchMovies.styled';
import { FiSearch } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

const SearchMovies = ({ onChange }) => {
  const [name, setName] = useState('');

  const hendlerOnChange = event => {
    setName(event.target.value.toLowerCase());
  };
  const hendlerOnSubmit = e => {
    e.preventDefault();
    if (name.trim() === '') {
      toast.error('Please input name for searching movies');
      return;
    }
    onChange(name);
    setName('');
  };
  return (
    <Search>
      <SearchForm onSubmit={hendlerOnSubmit}>
        <IconContext.Provider
          value={{ style: { color: 'black', width: '1.5em', height: '1.5em' } }}
        >
          <SearchFormButton type="submit">
            <FiSearch />
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>
        </IconContext.Provider>
        <SearchFormInput
          value={name}
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={hendlerOnChange}
        />
      </SearchForm>
    </Search>
  );
};
SearchMovies.propTypes = {
  onChange: PropTypes.func,
};
export default SearchMovies;
