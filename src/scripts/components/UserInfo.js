export default class UserInfo {
    constructor({profileName, profileInfo, profileAvatar}) {
        this._profileName = profileName;
        this._profileInfo = profileInfo;
        this._profileAvatar = profileAvatar
    }

    getUserInfo() {
        return {
            name: this._profileName.textContent,
            info: this._profileInfo.textContent,
            userId: this._userId,
        };
    }

    setUserInfo(user) {
        this._profileName.textContent = user.name;
        this._profileInfo.textContent = user.about;
        this._userId = user._id;
        this._profileAvatar.src = user.avatar;
    };
}