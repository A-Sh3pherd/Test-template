class Auth {
    constructor() {
        this.authenticated = false;
    }

    login(callback) {
        this.authenticated = true;
        localStorage.setItem('isAuth', this.authenticated);
        callback();
    }

    logout(callback) {
        this.authenticated = false;
        localStorage.clear();
        callback();
    }

    isAuthenticated() {
        const isAuth = localStorage.getItem('isAuth')
        if(isAuth) return this.authenticated = true;
        if (!isAuth) return this.authenticated = false
    }
}


export default new Auth()