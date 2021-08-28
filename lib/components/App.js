import React, { useEffect, useState } from "react";
import DataApi from "../DataApi";
import { data } from "../testData.json";
import ArticleList from "./ArticleList";
import axios from "axios";

// const { getArticles, getAuthors } = DataApi(data);

const App = () => {
    // const [articles, setArticles] = useState(null);
    // const [authors, setAuthors] = useState(null);
    const [state, setState] = useState({ articles: {}, authors: {} });
    // setArticles(getArticles());
    // console.log(articles);

    useEffect(() => {
        console.log("hello");
    });

    useEffect(() => {
        console.log("HHHHHHHHHHHHHHHH");
        (async () => {
            console.log("HHHHHHHHHHHHHHHH");
            const resp = await axios.get("http://localhost:8080/data");
            console.log(resp);
            const { getArticles, getAuthors } = DataApi(resp.data);
            console.log(getArticles());
            setState((prevState) => ({
                articles: getArticles(),
                authors: getAuthors(),
            }));
            // console.log(state.articles);
            // console.log(state.articles.ii);
        })();
    }, []);
    console.log(state);

    const articleActions = {
        lookupAuthor: (authorId) => state.authors[authorId],
    };

    return (
        <ArticleList
            articles={state.articles}
            articleActions={articleActions}
        />
    );
    // return <div>Hello</div>;
};

export default App;
