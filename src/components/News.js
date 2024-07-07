import React, { useEffect, useState } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = ({
  country = 'us',
  pageSize = 8,
  category = 'general',
  mode,
  setProgress
}) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const cap = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    document.title = `${cap(category)} - NewsMonkey`;
    updateNews();
    //eslint-disable=next-line
  }, []);

  const updateNews = async () => {
    setProgress(10);

    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=b46b5bb1c7f0473f905715a4208bc037&page=${page}&pageSize=${pageSize}`;

    setLoading(true);

    let data = await fetch(url);
    setProgress(30);
    let parsedData = await data.json();
    setProgress(50);
    console.log(parsedData);

    setArticles(parsedData.articles || []);
    setTotalResults(parsedData.totalResults || 0);
    setLoading(false);

    setProgress(100);
  };

  const fetchMoreData = async () => {
    const nextPage = page + 1;
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=b46b5bb1c7f0473f905715a4208bc037&page=${nextPage}&pageSize=${pageSize}`;
    
    setPage(nextPage);

    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <div className='ss pb-3' style={{ backgroundColor: mode === 'light' ? 'white' : 'black', color: mode === 'light' ? 'black' : 'white' }}>
      <div className='container mt-0 mb-3 pt-2'>
        <h1 className='h1c pt-3 pb-1 text-center' style={{marginTop: '55px'}}>News Monkey - Top Headlines</h1>
        <h2 className='h1c pb-3 text-center'>{cap(category)}</h2>

        {loading && <Spinner />} {/* Display spinner when loading is true */}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}>
          <div className="container">
            <div className="row">
              {articles.map((element, index) => (
                <div className="col-md-4 mb-3 d-flex justify-content-center" key={index}>
                  <Newsitem 
                    title={element.title ? element.title.slice(0, 71) : ''} 
                    description={element.description ? element.description.slice(0, 72) : ''} 
                    imageUrl={element.urlToImage} 
                    newsUrl={element.url} 
                    mode={mode} 
                    author={element.author} 
                    date={element.publishedAt} 
                    source={element.source.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  mode: PropTypes.string.isRequired,
  setProgress: PropTypes.func.isRequired
}

export default News;
