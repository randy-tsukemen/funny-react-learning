import React, { useState } from "react";
import ReactDOM from "react-dom";

// const App = () => <h2>Hello React</h2>;
const App = () => {
    const [state, setState] = useState(42);

    const asyncFunc = () => {
        return Promise.resolve(32);
    };
    const componentDidMount = async () => {
        setState(await asyncFunc());
    };
    componentDidMount();

    return <h2>Hello React -- {state}</h2>;
};

ReactDOM.render(<App />, document.getElementById("root"));
