"use strict";
exports.__esModule = true;
var core_1 = require("@material-ui/core");
var RingVolume_1 = require("@material-ui/icons/RingVolume");
var Home_1 = require("@material-ui/icons/Home");
var link_1 = require("next/link");
var useStyles = core_1.makeStyles({
    titleStyle: {
        flex: 1
    }
});
function Header() {
    var classes = useStyles();
    return (React.createElement(core_1.AppBar, { position: "static" },
        React.createElement(core_1.Toolbar, null,
            React.createElement(core_1.Typography, { variant: "h4", className: classes.titleStyle }, "Coffee Shop"),
            React.createElement(link_1["default"], { href: '/' },
                React.createElement(core_1.IconButton, { color: 'inherit' },
                    React.createElement(Home_1["default"], null))),
            React.createElement(core_1.IconButton, { color: 'inherit' },
                React.createElement(RingVolume_1["default"], null)))));
}
exports["default"] = Header;
