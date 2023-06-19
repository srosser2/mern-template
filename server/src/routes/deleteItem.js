const db = require('../persistence');

module.exports = async (req, res) => {
    console.log(req.params);
    await db.removeItem(req.params.id);
    res.sendStatus(200);
};
