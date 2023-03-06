const isProd = process.env.ELEVENTY_ENV === 'production';

module.exports = function() {
    return {
        isProd: process.env.ELEVENTY_ENV === 'production', 
        isDev: process.env.ELEVENTY_ENV === 'development',
    };
};