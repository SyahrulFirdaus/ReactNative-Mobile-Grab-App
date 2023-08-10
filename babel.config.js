module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          "alias": {
            "apis": "./src/apis",
            "store": "./src/store",
            "component": "./src/component",
            "assets": "./src/assets",
            "constants": "./src/constants",
            "screens": "./src/screens",
            "navigation": "./src/navigation"
          }
        }
      ]
    ]
  };
};
