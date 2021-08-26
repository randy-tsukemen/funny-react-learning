import DataApi from "./DataApi";
import { data } from "./testData.json";

// console.log(data.articles[0].id);
const { getArticles, getAuthors } = DataApi(data);

describe("DataApi", () => {
    it("expose article as an object", () => {
        const article = getArticles();
        const articleId = data.articles[0].id;
        const articleTitle = data.articles[0].title;

        expect(article).toHaveProperty(articleId);
        expect(article[articleId].title).toBe(articleTitle);
    });

    it("expose author as an object", () => {
        const author = getAuthors();
        const authorId = data.authors[0].id;
        const authorFirstName = data.authors[0].firstName;

        expect(author).toHaveProperty(authorId);
        expect(author[authorId].firstName).toBe(authorFirstName);
    });
});
