export default class UserRepository {

    constructor() {
        this.userList = [];
    }


    getUserList() {
        return this.userList;
    }

    addUser(user) {
        if (!!user) {

            this.userList.push(user);
            return true;
        }
        return false;
    }
}
