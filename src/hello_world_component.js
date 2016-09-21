import * as React from "react";

// export function HelloWorld(props) {
//     return (
//         <div>
//             <h1 onclick={props.onClickedCallback}>Hello world</h1>
//             <span>test</span>
//         </div>
//     );
// }

export const HelloWorld = React.createClass({
    render() {
        return (
            <div>
                <h1 onClick={this.props.callback}>Hello world</h1>
                <span>test</span>
            </div>
        );
    }
});