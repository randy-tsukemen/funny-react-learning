import React, { useEffect } from "react";
import DataApi from "../DataApi";
import ArticleList from "./ArticleList";
import axios from "axios";

const App = (props) => {
    // const [state, setState] = useState({ articles: {}, authors: {} });

    useEffect(() => {
        (async () => {
            const resp = await axios.get("/data");
            const { getArticles, getAuthors } = DataApi(resp.data);
            props.setData(() => ({
                articles: getArticles(),
                authors: getAuthors(),
            }));
        })();
    }, []);

    const articleActions = {
        lookupAuthor: (authorId) => props.initialData.authors[authorId],
    };

    return (
        <ArticleList
            articles={props.initialData.articles}
            articleActions={articleActions}
        />
    );
};

export default App;
