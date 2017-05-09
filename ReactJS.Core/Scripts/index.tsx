// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import * as React from 'react';
import * as ReactDOM from 'react-dom';

class App extends React.Component<any, any> {
    constructor(props : any) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div>
                <h1 style={{ color: '#333' }}>Hello, World!</h1>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));