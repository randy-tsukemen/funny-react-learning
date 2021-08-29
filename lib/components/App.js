import React, { useEffect, useState } from "react";
import DataApi from "../DataApi";
import ArticleList from "./ArticleList";
import axios from "axios";

const App = () => {
    const [state, setState] = useState({ articles: {}, authors: {} });

    useEffect(() => {
        (async () => {
            const resp = await axios.get("http://localhost:8080/data");
            const { getArticles, getAuthors } = DataApi(resp.data);
            setState(() => ({
                articles: getArticles(),
                authors: getAuthors(),
            }));
        })();
    }, []);

    const articleActions = {
        lookupAuthor: (authorId) => state.authors[authorId],
    };

    return (
        <ArticleList
            articles={state.articles}
            articleActions={articleActions}
        />
    );
};

export default App;
