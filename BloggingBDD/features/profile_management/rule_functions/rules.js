var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var usernameExpress = /^[A-Za-z0-9]+$/;


module.exports = class ProfileManagementRules {

    registerUser = (userObject) => {
        if (!(userObject.email.match(emailformat) && userObject.userName.match(usernameExpress))) {
            return 'Username or Email invalid!';
        } else if (userObject.email === 'sau@gmail.com' || userObject.userName === 'sau') {
            return 'sau already exists!';
        } else {
            return `${userObject.userName} has been registered!`
        }
    }

    loginUser = (userloginObject) => {
        if(!(userloginObject.userName === 'hada' || userloginObject.password === '1212' )){
            return 'Invalid username or password!!'
        }
        else{
            return `${userloginObject.userName} has been successfully logged in!`
        }
    }

    logout = (userStatus) => {
        const logOutObject = {
            currentStatus: 'notSignedIn',
            reponseMessage: 'Successfully logged out'
        }
        return logOutObject;
    }
}