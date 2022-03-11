// @ts-ignore
import { StoredKeys } from "../constants/StoredKeys";

class ApiService {
    constructor(config) {
        const API_URL = process.env.REACT_APP_API_URL;

        this.baseUrl = config.baseUrl || `${API_URL}`;
        this.userToken = config.userToken || null;
    }

    set token(value) {
        this.userToken = value;
    }

    get token() {
        return this.userToken;
    }

    getStoredToken() {
        const storedValues = localStorage.getItem(StoredKeys.AUTH_DATA);
        const parsedValues = JSON.parse(storedValues);
        const result = parsedValues.token;
        if (result !== null) {
            this.userToken = result.split("|")[1];
        }
    }

    setUri(uri) {
        if (!uri.startsWith("/")) {
            return "/" + uri;
        }
        return uri;
    }

    async get(uri) {
        const url = this.baseUrl + this.setUri(uri);
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                },
            });
            const json = await response.json();
            return json;
        } catch (error) {
            console.error(error);
            return {
                success: false,
                message: error.message || "Error occurred.",
            };
        }
    }

    async authGet(uri) {
        await this.getStoredToken();
        const url = this.baseUrl + this.setUri(uri);
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${this.userToken}`,
                },
            });
            const json = await response.json();
            return json;
        } catch (error) {
            console.error(error);
            return {
                success: false,
                message: error.message || "Error occurred.",
            };
        }
    }

    async loginAttempt({
        _email,
        password,
    }) {
        const deviceName = 'browser';
        const url = this.baseUrl + "/api/login";
        const bodyParams = {
            email: _email,
            password,
            device_name: deviceName,
        };
        return await fetch(url, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bodyParams),
        });
    }

    async post(uri, data) {
        this.getStoredToken();
        const url = this.baseUrl + this.setUri(uri);
        return await fetch(url, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.userToken}`,
            },
            body: JSON.stringify({
                data,
            }),
        });
    }

    async put(uri, data) {
        this.getStoredToken();
        const url = this.baseUrl + this.setUri(uri);
        return await fetch(url, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.userToken}`,
            },
            body: JSON.stringify({
                data,
            }),
        });
    }

    async delete(uri, data) {
        await this.getStoredToken();
        const url = this.baseUrl + this.setUri(uri);
        return await fetch(url, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.userToken}`,
            },
        });
    }
}

export { ApiService };