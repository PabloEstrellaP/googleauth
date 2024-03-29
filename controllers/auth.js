const { response } = require('express')
const { validarGoogleToken } = require('../helpers/googleVerifyToken');

const googleAuth = async ( req, res = response ) => {
    
    const { token } = req.body;    
    if( !token ){
        return res.status(400).json({
            ok : false,
            msg : 'No hay el token'
        });
    }

    const googleUser = await validarGoogleToken( token );
    
    if( !googleUser ){
        return res.status(400).json({
            ok : false,
            msg : 'No se verificó el token'
        });
    }

    res.json({
        ok : true,
        googleUser
    })
}



module.exports = {
    googleAuth
}