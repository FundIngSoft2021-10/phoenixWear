module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: '@import "./src/style/_variables.scss"; @import "./src/style/_fonts.scss";',
            },
        },
    },
};