export default class UserInfo {
    constructor({profileName, profileInfo}) {
        this._profileName = profileName;
        this._profileInfo = profileInfo;
    }

    getUserInfo() {
        return {
            name: this._profileName.textContent,
            info: this._profileInfo.textContent
        };
    }

    setUserInfo(nameUser, infoUser) {
        this._profileName.textContent = nameUser;
        this._profileInfo.textContent = infoUser;
    };
}