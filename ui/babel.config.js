module.exports = {
  presets:[
      "@babel/preset-env",
      "@babel/preset-react",
  ]
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy"
  }
}