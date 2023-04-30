import React from 'react';
import Search from '../components/Search';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import {
  Description,
  Image,
  LocalOffer,
  MoreVert,
  Room,
  Search as SearchIcon,
} from '@mui/icons-material';
import useGoogleSearch from '../useGoogleSearch';
import '../css/SearchPage.css';

const SearchPage = () => {
  const [{ term }] = useStateValue();
  // Live API Call
  const { data } = useGoogleSearch(term);

  return (
    <div className='searchPage'>
      <div className='searchPage__header'>
        <Link to='/'>
          <img
            className='searchPage__logo'
            src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
            alt='google logo'
          />
        </Link>
        <div className='searchPage__headerBody'>
          <Search hideButtons termCheck />
          <div className='searchPage__options'>
            <div className='searchPage__optionsLeft'>
              <div className='searchPage__option'>
                <SearchIcon />
                <Link to='/all'>All</Link>
              </div>
              <div className='searchPage__option'>
                <Description />
                <Link to='/news'>News</Link>
              </div>
              <div className='searchPage__option'>
                <Image />
                <Link to='/images'>Images</Link>
              </div>
              <div className='searchPage__option'>
                <LocalOffer />
                <Link to='/shopping'>shopping</Link>
              </div>
              <div className='searchPage__option'>
                <Room />
                <Link to='/maps'>maps</Link>
              </div>
              <div className='searchPage__option'>
                <MoreVert />
                <Link to='/more'>more</Link>
              </div>
            </div>
            <div className='searchPage__optionsRight'>
              <div className='searchPage__option'>
                <Link to='/settings'>Settings</Link>
              </div>
              <div className='searchPage__option'>
                <Link to='/tools'>Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className='searchPage__results'>
          <p className='searchPage__resultCount'>
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>
          {data?.items.map((item) => (
            <div className='searchPage__result'>
              <a href={item.displayLink} target='_blank' rel='noreferrer'>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0].src && (
                    <img
                      src={item.pagemap?.cse_image[0].src}
                      alt='result'
                      className='searchPage__resultImage'
                    />
                  )}
                {item.displayLink} <MoreVert />
              </a>
              <a
                href={item.link}
                className='searchPage__resultTitle'
                target='_blank'
                rel='noreferrer'
              >
                <h3>{item.title}</h3>
              </a>
              <p className='searchPage__resultSnippet'>{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
