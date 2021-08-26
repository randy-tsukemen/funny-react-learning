const DataApi = (rawData) => {
    const mapIntoObject = (arr) => {
        return arr.reduce((acc, curr) => {
            acc[curr.id] = curr;
            return acc;
        }, {});
    };

    const getArticles = () => {
        // console.log(rawData);
        return mapIntoObject(rawData.articles);
    };

    const getAuthors = () => mapIntoObject(rawData.authors);

    return { getArticles, getAuthors };
};

export default DataApi;
