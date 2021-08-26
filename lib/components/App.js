import React, { useState } from "react";
import DataApi from "../DataApi";
import { data } from "../testData.json";
import ArticleList from "./ArticleList";

const { getArticles, getAuthors } = DataApi(data);

const App = () => {
    const [articles, setArticles] = useState(getArticles());
    const [authors, setAuthors] = useState(getAuthors());
    const [state, setState] = useState(42);

    console.log(articles);

    return <ArticleList articles={articles} authors={authors} />;
};

export default App;
