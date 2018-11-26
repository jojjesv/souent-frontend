module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    module:{
        rules: [
            {
                test: /\.s?css$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
              test: /\.tsx?$/,
              exclude: /node_modules/,
              use: ["awesome-typescript-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".tsx", ".ts"]
    }
}