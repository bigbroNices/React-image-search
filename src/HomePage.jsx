import { useState } from 'react';

import { ResultsRow } from './components/ResultsRow';
import { SuggestedCategoryRow } from './components/SuggestedCategoryRow.jsx';
import { getRanomMessage } from './utils/getRandomTextFunction.jsx'
import SlideInView from './components/SlideInTextBar.jsx';

import { accessKey } from './unsplashKey.jsx';

import errorPic from './assets/error-pic1.png'

import './HomePage.css'

export function HomePage() {
  const [page, setPage] = useState(1);

  const [query, setQuery] = useState('');
  const [queryResult, setqueryResult] = useState([]);
  const [imgArray, setImgArray] = useState([]);

  const [isError, setIsError] = useState(false);

  const [cheerMessage, setCheerMessage] = useState('Hello here, try typing something');

  async function getImageData(page, query) {
    const data = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${accessKey}&per_page=${30}`);
    const responce = await data.json();
    //console.log(data)
    return responce
  }

  async function searchForImage() {
    if (query.trim() === '') {
      return
    };

    const responce = await getImageData(1, query);

    setImgArray(responce.results);
    setqueryResult(responce.results);
    //console.log(responce);
    setPage(1);

    if (responce.results.length < 1) {
      setIsError(true)
      return
    } else {
      setIsError(false)
      const cheerMessage = getRanomMessage();
      setCheerMessage(cheerMessage);
    }
  }

  async function showMore() {
    const nextPage = page + 1;
    const responce = await getImageData(nextPage, query);
    console.log(responce)
    setImgArray((prev) => {
      return [
        ...prev,
        ...responce.results
      ]
    })
    setPage(nextPage);
  }

  async function showMuchMore() {
    let nextPage = page
    for (let i = 0; i < 4; i++) {
      nextPage++;
      const responce = await getImageData(nextPage, query);
      setImgArray(prev => [
        ...prev,
        ...responce.results
      ]);
    }
    setPage(nextPage);
  }

  async function getSuggestedCategoryImage(query) {
    setQuery(query);

    const responce = await getImageData(1, query);

    setImgArray(responce.results);

    setqueryResult(responce.results);
    //console.log(responce);
    setPage(1);

    if (responce.results.length < 1) {
      setIsError(true)
      return
    } else {
      setIsError(false)
      const cheerMessage = getRanomMessage();
      setCheerMessage(cheerMessage);
    }
  }

  return (
    <>
      <div className="search-box">
        <p className="header-name">
          Image Search App
        </p>
        <SlideInView
          isError={isError} 
          cheerMessage={cheerMessage} />
        <div className="search-row">
          <input
            className="input-bar"
            placeholder="Tell me your idea ..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                searchForImage();
              }
            }} />

          <button
            className="search-button"
            onClick={searchForImage}>
            Search
          </button>
        </div>
      </div>

      <SuggestedCategoryRow
        getSuggestedCategoryImage={getSuggestedCategoryImage} />

      <div>
        <ResultsRow imgArray={imgArray} />
        <div
          className={`error-box ${isError ? "error-box-active" : ""}
          `}>
          <img
            className='error-pic'
            alt=''
            src={errorPic} />
          <div 
            className='error-text'>
            No Results Found
          </div>
        </div>
      </div>
      <div
        className={`show-more-row ${imgArray.length > 0 ? "show-more-row-active" : ""}
        `}>
        <button
          className="show-more-button"
          onClick={showMore}>
          show more
        </button>
        <button
          className="show-much-more-button"
          onClick={showMuchMore}>
          show muchs more
        </button>
      </div>
    </>
  )
}