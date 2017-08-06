module.exports = {
    entry: './public/main.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    watch: true,
    module: {
        loaders: [{
                test: /\.css/,
                loader: 'style-loader!css-loader'
            },
            {
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2016', 'react']
                }
            },
        ]
    }
}