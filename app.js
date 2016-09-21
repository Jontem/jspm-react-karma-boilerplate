import 'systemjs-hot-reloader/default-listener.js';

import * as React from "react";
import DOM from "react-dom";

export let rootComponent = DOM.render(
    <h1>Hello react world!</h1>,
    document.getElementById("app")
);