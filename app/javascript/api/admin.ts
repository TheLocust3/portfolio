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

        }).then((response: any) => {
            return new Admin(response.id, response.email);
        });
    }

    save(): Promise<any> {
        console.log("Cannot save Admin object!");
        return new Promise((resolve, reject) => {
            reject();
        });
    }
}
