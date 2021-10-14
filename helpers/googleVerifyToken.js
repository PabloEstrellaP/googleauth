const { OAuth2Client } = require('google-auth-library');

const CLIENT_ID = '546128030559-d9j7tkh7m0e442v8g69ppsqnenu7h8g9.apps.googleusercontent.com';

const client = new OAuth2Client( CLIENT_ID );

const validarGoogleToken = async ( token ) => {
    try {

        const ticket = await client.verifyIdToken({
            idToken : token,
            audience : [
                CLIENT_ID,
                '546128030559-2pt13r1l2cimj7q399qmt6123nqufq36.apps.googleusercontent.com',
            ],
        });
        const payload = ticket.getPayload();
        // console.log( payload );
    
        return {
            name : payload['name'],
            picture : payload['picture'],
            email : payload['email'],
        }
    } catch (error) {
        console.log(error);
        return null;
    }

    // If request specified a G Suite domain:
    // const domain = payload['hd'];  
}

module.exports = {
    validarGoogleToken
}
