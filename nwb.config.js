module.exports = {
  type: 'react-app',
  karma: {
    frameworks: ['mocha', 'chai', 'chai-as-promised'],
    plugins: [
      require('karma-chai-plugins')
    ],
    extra: {
      transports: ['polling']
    },
  },
  babel: {
    plugins: [["import", { libraryName: "antd", style: "css" }]]
  },
  webpack: {
    compat: {
      enzyme: true
    }
  }
}
