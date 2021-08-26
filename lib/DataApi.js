const DataApi = (rawData) => {
    const mapIntoObject = (arr) => {
        return arr.reduce((acc, curr) => {
            acc[curr.id] = curr;
            return acc;
        }, {});
    };

    const getArticle = () => {
        // console.log(rawData);
        return mapIntoObject(rawData.articles);
    };

    const getAuthors = () => mapIntoObject(rawData.authors);

    return { getArticle, getAuthors };
};

export default DataApi;
