import React, { useState, useEffect } from "react";
import SearchForm from "../Component/SearchForm";
const NewsApp = () => {
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("election");
  const [isLoading, setIsLoading] = useState(true);
  const fetchArticles = () => {
    fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchQuery}&api-key=${process.env.REACT_APP_ARTICLE_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => (setArticles(data.response.docs), setIsLoading(false)))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchArticles();
  }, [searchQuery]);
  return (
    <>
      <div className="article-header">
        <div className="overlay">
          <h1 className="header-heading">
            Viewing Articles About {searchQuery}
          </h1>
          <SearchForm searchText={(search) => setSearchQuery(search)} />
        </div>
      </div>
      {isLoading ? (
        <h1 className="loading">Loading....</h1>
      ) : (
        <div>
          {articles.map((article) => {
            const {
              abstract,
              byline: { original },
              headline: { main },
              multimedia,
              lead_paragraph,
              news_desk,
              section_name,
              web_url,
              word_count,
              _id,
            } = article;

            return (
              <article key={_id} className="articles">
                <h2 className="headline">{main}</h2>
                <p>{abstract}</p>
                <p>{lead_paragraph}</p>
                <ul className="article-list">
                  <li>{original}</li>
                  <li>
                    <span className="info">News Desk</span>:{news_desk}
                  </li>
                  <li>
                    <span className="info">Esction Name</span> :{section_name}
                  </li>
                  <li>
                    <span className="info">Word Count</span> :{word_count}
                  </li>
                </ul>
                <a href={web_url} target="_blank">
                  Web Resources
                </a>
              </article>
            );
          })}
        </div>
      )}
    </>
  );
};

export default NewsApp;
