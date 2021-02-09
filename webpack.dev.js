const webpack = require("webpack");
const {merge} = require("webpack-merge");
const common = require("./webpack.common.js");
var devConf = {
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: []
    },
}
module.exports = [ 
    merge(common[0], devConf)
]
