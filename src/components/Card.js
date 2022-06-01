import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import Loading from "./Loading";

function Card() {
  const { fetchNews, newsData, loading, handleLoading } = useGlobalContext();
  useEffect(() => {
    fetchNews();
    handleLoading();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className="card-container">
            {newsData.map((news, index) => {
              const {
                urlToImage,
                title,
                description,
                url,
                publishedAt,
              } = news;
              return (
                <div className="card-body" key={index}>
                  <img
                    src={urlToImage}
                    alt="news-image"
                    className="card-image"
                  />
                  <h4 className="card-title">{title}</h4>
                  <hr />
                  <p className="card-desc">
                    {description}
                    <a href={url} target="_blank" className="read-more-link">
                    &nbsp;
                     Read more...
                    </a>
                  </p>
                  <div className="card-info-container">
                    <p className="date">{publishedAt.split("T")[0]}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
