module.exports = {
    "extends": "eslint:recommended",
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "indent" : [2, 2, {"SwitchCase": 1}]
    },
    "env": { "es6": true,
             "browser":true } 
};
