import React, { useState, useEffect, useContext } from "react";

const AppContext = React.createContext();

const url =
  "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=577416533b184a23b2e5b7918759e758";

export const AppProvider = ({ children }) => {
  const [showLinks, setShowLinks] = useState(false);
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleShowLinks = () => setShowLinks(!showLinks);
  const handleLoading = () => setLoading(!loading);

  const fetchNews = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setNewsData(data.articles);
  };

  return (
    <AppContext.Provider
      value={{
        showLinks,
        handleShowLinks,
        fetchNews,
        newsData,
        loading,
        handleLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
