import "babel-polyfill";
import NavTree from "./navtree";
module.exports = {
    run: function (args) {
        new NavTree(args);
    }
};