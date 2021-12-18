import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { Mic, Search as SearchIcon } from '@mui/icons-material';
import { Button } from '@mui/material';
import '../css/Search.css';

const Search = ({ hideButtons = false, termCheck }) => {
  const [{ term }, dispatch] = useStateValue();
  const [input, setInput] = useState('');
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();
    dispatch({
      type: 'SET_SEARCH_TERM',
      term: input,
    });
    history.push(`/search/${input}`);
  };

  return (
    <div className='search'>
      <form className='search__form'>
        <div className='search__input'>
          <SearchIcon className='search__inputIcon' />
          {termCheck ? (
            <input
              type='text'
              value={term}
              onChange={(e) => setInput(e.target.value)}
            />
          ) : (
            <input
              type='text'
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          )}
          <Mic className='search__mic' />
        </div>
        {!hideButtons ? (
          <div className='search__buttons'>
            <Button type='submit' onClick={search} variant='outlined'>
              Google Search
            </Button>
            <Button variant='outlined'>I'm Feeling Lucky</Button>
          </div>
        ) : (
          <div className='search__buttons'>
            <Button
              className='search__buttonsHidden'
              type='submit'
              onClick={search}
              variant='outlined'
            >
              Google Search
            </Button>
            <Button className='search__buttonsHidden' variant='outlined'>
              I'm Feeling Lucky
            </Button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Search;
