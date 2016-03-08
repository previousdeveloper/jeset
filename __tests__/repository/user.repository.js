jest.unmock('../../src/repository/user.repository');

import UserRepository from "../../src/repository/user.repository";

let userRepo;

beforeEach(()=> {
    userRepo = new UserRepository();
});

describe('userList', () => {

    it('userList should be equal to 0', () => {

        expect(userRepo.getUserList().length).toBe(0);
    });
});

describe('addUser', () => {

    let user = {
        userId: 1,
        userName: 'jester'
    };

    it('addUser should be equal to true', () => {

        expect(userRepo.addUser(user)).toBe(true);
    });

    it('addUser should be equal to true', () => {

        expect(userRepo.addUser(null)).toBe(false);
    });
});