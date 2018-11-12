/**
 * Webpack config file.
 * @author Johan Svensson
 * @see https://github.com/s-panferov/awesome-typescript-loader
 */

module.exports = {
  resolve: {
    extensions: [ '.ts', '.tsx', '.js', '.jsx' ]
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader', 'css-loader', 'sass-loader'
        ]
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  }
}