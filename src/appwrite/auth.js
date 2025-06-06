import { use } from "react";
import conf from "../conf/conf"
import { Client, Account, ID } from "appwrite";


// --------------------------
export class AuthService {

    client = new Client();
    account;

    constructor() {
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}) {
        try {
            const user = await this.account.create(ID.unique(), email, password, name);

            if (user) {
                return this.login({email, password});
            }
            else {
                return user;
            }

        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            const session = await this.account.createEmailPasswordSession(
                email,
                password
            );

            return session;
        } catch (error) {
            throw error;
        }
    }

    async logout () {
        try {
            const result = await account.deleteSessions();

            return result;
        } catch (error) {
            console.log("Appwrite Service: logout: Error: ", error);
        }
    }

    async getCurrentUser() {
        try {
            const user = this.account.get();

            return user;
        } catch (error) {
            console.log("Appwrite Service: getuser: Error: ", error);
        }

        return null;
    }
}

const authService = new AuthService();

export default authService;
