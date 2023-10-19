// mock-auth.js
const users = [
    { id: 1, username: "user1", password: "password1" },
    { id: 2, username: "user2", password: "password2" },
];

let currentUser = null;

function login(username, password) {
    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
        currentUser = user;
        return true;
    }
    return false;
}

function logout() {
    currentUser = null;
}

function getCurrentUser() {
    return currentUser;
}

export { login, logout, getCurrentUser };
