module.exports = {
    db: process.env.MONGODB || 'mongodb://localhost:27017/curso_mongo',
    port: process.env.PORT || 3000
};