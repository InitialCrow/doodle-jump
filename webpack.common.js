const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin')

var config = {
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: [/node_modules/],
                
            },
            {
                test: /\.(svg|gif|png|jpg)$/,
                loader:'file-loader',
                exclude: [/fonts/, /node_modules/],
                options:{
                    name: 'assets/sprites/[name].[ext]',
                }
            }

        ]
    },
    performance: {
        hints: "warning", // enum
        maxAssetSize: 200000000, // int (in bytes),
        maxEntrypointSize: 400000000, // int (in bytes)
        assetFilter: function(assetFilename) {
        // Function predicate that provides asset filenames
        return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
        }
    },
    plugins:[
        new CopyWebpackPlugin({
            // {output}/to/file.txt
            patterns: [
                { from: 'assets/**/*', to: __dirname+'/dist', context: './ressources', noErrorOnMissing: true,},
                { from: 'css/**/*', to: __dirname+'/dist', context: './ressources', noErrorOnMissing: true,},
                { from: 'index.html', to: __dirname+'/dist',  noErrorOnMissing: true,},
                { from: '../server.js', to: __dirname+'/dist',noErrorOnMissing: true,}
            ],
            options:{
                concurrency: 100,

            }
          
        })
    ]
}

var mainConfig = Object.assign({}, config, {
    context: path.resolve(__dirname, 'client'),
    name: "main",
    entry:  {main:['./ressources/js/index.js']},
    output: {
       path: path.resolve(__dirname, 'dist'),
       filename: "js/main.js"
    }
});



module.exports = [mainConfig]