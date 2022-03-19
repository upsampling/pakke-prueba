const { USER, PASSWORD } = process.env;

function MiddlewareAuth (req, res, next) {

    const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
    const [user, password] = Buffer.from(b64auth, 'base64').toString().split(':')

    if( user && password && user === USER && password === PASSWORD ){
        return next();
    }

    return res.status(401).send('Ingresa credenciales validas');

}
  
  module.exports = { MiddlewareAuth };