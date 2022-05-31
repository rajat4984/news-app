import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const url =
  "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=577416533b184a23b2e5b7918759e758";

export const AppProvider = ({ children }) => {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => setShowLinks(!showLinks);

  const fetchNews = async () => {
    const response = await fetch(url);
    const data = await response.json();
  };

  return (
    <AppContext.Provider value={{ showLinks, handleShowLinks,fetchNews }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
