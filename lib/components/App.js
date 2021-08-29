import React, { useEffect, useState } from "react";
import DataApi from "../DataApi";
import { data } from "../testData.json";
import ArticleList from "./ArticleList";
import axios from "axios";

// const { getArticles, getAuthors } = DataApi(data);

const App = () => {
    // const [articles, setArticles] = useState(null);
    // const [authors, setAuthors] = useState(null);
    const [state, setState] = useState({ articles: { jkh: 11 }, authors: {} });
    // setArticles(getArticles());
    // console.log(articles);

    useEffect(() => {
        console.log("first useEffect");
    });

    useEffect(() => {
        console.log("second useEffect");
        (async () => {
            // console.log(state.articles);
            console.log("in async");

            const resp = await axios.get("http://localhost:8080/data");
            console.log(resp);
            const { getArticles, getAuthors } = DataApi(resp.data);
            // console.log(getArticles());
            console.log("setState");
            setState(() => ({
                articles: getArticles(),
                authors: { 456: "pp" },
            }));
            console.log("getdata useEffect");
            console.log(state.articles);
            console.log(state.authors);
            // console.log(state.articles.ii);
        })();
    }, []);
    console.log("state.articles in App");
    console.log(state.articles);
    useEffect(() => {
        console.log("third useEffect");
        console.log(state.articles);
        console.log(state.authors);
    });
    // const articleActions = { lookupAuthor: (authorId) => authors[authorId] };

    // return <ArticleList articles={articles} articleActions={articleActions} />;
    return <div>Hello</div>;
};

export default App;
