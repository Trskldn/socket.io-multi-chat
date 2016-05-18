module.exports = {
    "env": {
        "node": true,
        "amd": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "_": true,
        "app": true,
        "Backbone": true,
        "console": true
    },
    "rules": {
        "linebreak-style": [
            "error",
            "unix"
        ],
        "no-console":0
    }
};