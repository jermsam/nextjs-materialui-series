"use strict";
exports.__esModule = true;
var styles_1 = require("@material-ui/core/styles");
var red_1 = require("@material-ui/core/colors/red");
// Create a theme instance.
exports["default"] = styles_1.createMuiTheme({
    palette: {
        primary: {
            main: '#C2185B'
        },
        secondary: {
            main: '#1565C0'
        },
        error: {
            main: red_1["default"].A400
        },
        background: {
            "default": '#fff'
        }
    }
});
