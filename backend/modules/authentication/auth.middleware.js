const jwt = require('jsonwebtoken');
const schema = require('../user/schema');

const verifyUser =async (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) return res.status(401).json({ error: 'Access denied' });

    try {
        const bearerToken = token.split(' ')[1];
        const decoded =await jwt.verify(bearerToken, 'Recipe_Realm');
       
        const user = await schema.findById(decoded.id)

        if(user){
            req.user = decoded;
            next();
        }else{
            res.status(401).json({ error: 'Access denied' })
        }

    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};

module.exports = verifyUser;