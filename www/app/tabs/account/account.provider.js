angular.module('scoffy.services')

.service('UserAccountService', userAccount);

function userAccount(DEFAULT_USER_SETTINGS) {
    var userData = {};
    return {
        setUserData: function (authData) {
            userData.provider = authData.provider;
            userData.uid = authData.uid;
            userData.token = authData.token;
            if (userData.provider !== "anonymous") {
                userData.displayName = authData[userData.provider].displayName;
                userData.id = authData[userData.provider].id;
                userData.avatar = authData[userData.provider].profileImageURL;
                userData.email = authData[userData.provider].email;

            } else {
                userData.displayName = (DEFAULT_USER_SETTINGS.userPrefix + authData.uid).substring(0, 25);
                userData.avatar = DEFAULT_USER_SETTINGS.avatar;
                userData.email = userData.displayName + DEFAULT_USER_SETTINGS.emailSuffix;
                userData.emailInboxLink = DEFAULT_USER_SETTINGS.emailInboxPrefix + userData.displayName;
            }
        }
        , getUserData: function () {
            return userData;
        }
    }
}

userAccount.$inject = ['DEFAULT_USER_SETTINGS'];