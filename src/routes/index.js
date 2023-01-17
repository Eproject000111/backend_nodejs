

module.exports = (app) => {

    require('./users')(app);
    
    return app;
}