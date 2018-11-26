module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    module:{
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    }
}