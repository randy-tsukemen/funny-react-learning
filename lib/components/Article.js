import React from "react";

const dateDisplay = (date) => new Date(date).toDateString();

const Article = (props) => {
    const { article, actions } = props;
    const author = actions.lookupAuthor(article.authorId);

    // console.log(props.article);
    return (
        <div className="article">
            <div>{article.title}</div>
            <div>{dateDisplay(article.date)}</div>
            <div>
                <a href={author.website}>
                    {author.firstName} {author.lastName}
                </a>
            </div>
            <div>{article.body}</div>
        </div>
    );
};

export default Article;
