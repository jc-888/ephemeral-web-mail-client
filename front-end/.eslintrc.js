module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "standard",
    "parser": "babel-eslint",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-unused-vars": "off",
        "camelcase": "off",
        "template-curly-spacing" : "off",
        indent : "off"
    }
};