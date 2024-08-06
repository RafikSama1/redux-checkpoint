
module.exports = (handler) => (req, res, next) => {
    handler(req, res)
        .catch(err => next(err));
}