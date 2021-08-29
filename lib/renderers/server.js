import React from "react";
import ReactDOMServer from "react-dom/server";
import axios from "axios";

import DataApi from "../DataApi";
import App from "../components/App";

const serverRender = async () => {
    const resp = await axios.get("http://localhost:8080/data");
    const { getArticles, getAuthors } = DataApi(resp.data);
    const state = {
        articles: getArticles(),
        authors: getAuthors(),
    };
    return ReactDOMServer.renderToString(<App initialData={state} />);
};

export default serverRender;
