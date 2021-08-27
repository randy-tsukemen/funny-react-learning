import React from "react";
import ArticleList from "./ArticleList";
import renderer from "react-test-renderer";
// import { shallow } from "enzyme";

describe("ArticleList", () => {
    const testProps = {
        articles: {
            a: { id: "a" },
            b: { id: "b" },
        },
        articleActions: {
            lookupAuthor: jest.fn(() => ({})),
        },
    };
    it("should render a list of articles", () => {
        const tree = renderer.create(<ArticleList {...testProps} />).toJSON();

        console.log(tree);
        expect(tree.children.length).toBe(2);
        expect(tree).toMatchSnapshot();
        // expect(wrapper.find("article")).to.have.length(3);
    });
});
