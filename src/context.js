import React, { useState, useContext, useRef } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [showLinks, setShowLinks] = useState(false);
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("general");
  const [searchTerm, setSearchTerm] = useState("");

  const handleShowLinks = () => setShowLinks(!showLinks);
  const handleLoading = () => setLoading(!loading);
  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.textContent.toLowerCase());
    handleShowLinks();
  };

  const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=30&apiKey=577416533b184a23b2e5b7918759e758`;

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
        handleCategory,
        category,
        searchTerm,
        handleSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
