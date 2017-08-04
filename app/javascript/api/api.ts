import $ from 'jquery'

$.ajaxSetup({
    headers: {
        'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
    },
    dataType: 'json'
});

export default abstract class ApiObject {
    private _id: number;

    constructor(id) {
        this._id = id;
    }

    get id(): number {
        return this._id;
    }

    abstract save(): void;
}
