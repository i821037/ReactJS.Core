// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var ReactDOM = require("react-dom");
var App = (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    App.prototype.render = function () {
        return (<div>
                <h1 style={{ color: '#333' }}>Hello, World!</h1>
            </div>);
    };
    return App;
}(React.Component));
ReactDOM.render(<App />, document.getElementById('app'));
//# sourceMappingURL=index.jsx.map