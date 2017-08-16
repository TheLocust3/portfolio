import _ from 'lodash'
import $ from 'jquery';
import ApiObject from './api';

export default class Admin extends ApiObject {
    private _email: string;

    constructor(id?: number, email?: string) {
        super(id);

        this._email = _.isEmpty(email) ? '' : email;
    }

    get email(): string {
        return this._email;
    }

    static currentAdmin(): Promise<Admin> {
        return new Promise((resolve, reject) => {
            $.ajax(`/api/current_admin`, {
                type: 'get',
                success: resolve,
                error: reject
            });
        }).then((response: any) => {
            if (_.isNull(response)) {
                return null
            }

            return new Admin(response.id, response.email);
        });
    }

    static signIn(email: string, password: string): Promise<Admin> {
        return new Promise((resolve, reject) => {
            $.ajax(`/api/admin/sign_in`, {
                type: 'post',
                data: { admin: { email: email, password: password } },
                success: resolve,
                error: reject
            });
        }).then((response: any) => {
            return new Admin(response.id, response.email);
        });
    }

    static signOut(): Promise<any> {
        return new Promise((resolve, reject) => {
            $.ajax(`/api/admin/sign_out`, {
                type: 'delete',
                success: resolve,
                error: reject
            });
        })
    }

    save(): Promise<any> {
        console.log("Cannot save Admin object!");
        return new Promise((resolve, reject) => {
            reject();
        });
    }
}
