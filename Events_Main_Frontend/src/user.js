class User {

    constructor(data) {
        // this.id = data.id
        this.name = data.name
        User.all.push(this)
    }

    static renderNewUserForm() {
        return `
        <form>
            <label>User's name</label>
                <p>
                <input type="text" name="name" value="${this.name}" />
                </p>
                <button type='submit'>Create User</button>

        </form>
        `
    }
}

User.all = [];