import React from "react";

import Article from "./Article";

const ArticleList = (props) => {
    // console.log(props.articles);
    // console.log(props.articleActions);
    return (
        <div>
            {Object.values(props.articles).map((article) => (
                <Article
                    key={article.id}
                    article={article}
                    actions={props.articleActions}
                />
            ))}
        </div>
    );
};

export default ArticleList;
