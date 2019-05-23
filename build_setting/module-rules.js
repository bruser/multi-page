const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { sassTemplate = {}, isLazyLoad } = require('../.compile');
const lazy = isLazyLoad?["lazyload-loader"]:[];

const styleTemplate = {};
let sassResource = [];
Object.assign(styleTemplate, sassTemplate.rules || {});
if (sassTemplate.extends) {
  sassResource.push({
    loader: 'sass-resources-loader',
    options: {
      resources: sassTemplate.extends
    }
  })
}

const rules = [
  { test: /\.tsx?$/, loader: "ts-loader" },
  {
    test: /\.json$/,
    loader: 'json-loader',
    exclude: /node_modules/
  }
];

module.exports = {
  server: [
    {
      test: /\.(js|jsx)$/,
      exclude:/node_modules/,
      loader:'babel-loader',
      exclude: /node_modules/
    },
  //   {
  //   test: /\.(js|jsx)$/,
  //   use: [
  //     {
  //       loader: "babel-loader",
  //       options: {
  //         presets: ["react",["es2015", { "modules": false }],"stage-0"],
  //         plugins: ["transform-class-properties","react-hot-loader/babel","transform-runtime"],
  //         env: {
  //           "development": {
  //             "plugins": [["react-transform", {
  //               "transforms": [{
  //                 "transform": "react-transform-hmr",
  //                 "imports": ["react"],
  //                 "locals": ["module"]
  //               }]
  //             }]]
  //           }
  //         }
  //       }
  //     },
  //     ...lazy
  //   ],
  //   exclude: /node_modules/
  // }
   {
    test: /\.(scss|sass|css)$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
        options: {
          data: Object.keys(styleTemplate)
            .map(key => `\$${key}: ${styleTemplate[key]};`)
            .join('\n'),
          sourceMap: true,
          sourceMapContents: true
        }
      },
      ...sassResource,
    ],
  }, {
    test: /\.(png|jpg|gif|svg)$/,
    loader: 'file-loader',
    options: {
      name: 'images/[name].[ext]?[hash]'
    }
  }, ...rules],
  build: [
    // {
    //   test: /\.(js|jsx)$/,
    //   use: [
    //     {
    //       loader: "babel-loader",
    //       options: {
    //         "presets": [
    //           "react",
    //           ["es2015", { "modules": false }],
    //           "stage-0"
    //         ],
    //       }
    //     },
    //     ...lazy
    //   ],
    //   exclude: /node_modules/
    // }
    {
      test: /\.(js|jsx)$/,
      exclude:/node_modules/,
      loader:'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.(scss|sass|css)$/,
      // loader: ['style-loader', 'css-loader', 'sass-loader']
      use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
        {
          loader: 'sass-loader',
          options: {
            data: Object.keys(styleTemplate)
              .map(key => `\$${key}: ${styleTemplate[key]};`)
              .join('\n'),
            sourceMap: false,
            sourceMapContents: false
          }
        }, ...sassResource
      ]
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      options: {
        name: 'images/[name].[ext]?[hash]'
      }
    }, ...rules]
}