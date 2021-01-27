module.exports = {
  entry: '/src/index.tsx',
  babelPlugins: [
   ["import", { libraryName: "antd", "style": "css" }]
  ]
};