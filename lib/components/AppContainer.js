import React, { useState } from "react";
import App from "./App";

const AppContainer = () => {
    const [state, setState] = useState({ articles: {}, authors: {} });
    return <App initialData={state} setData={setState} />;
};

export default AppContainer;
