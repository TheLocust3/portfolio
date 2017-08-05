import $ from 'jquery';
import ApiObject from './api';

export default class Article extends ApiObject {
    private _title: string;
    private _text: string;

    constructor(id: number, title: string, text: string) {
        super(id);

        this._title = title;
        this._text = text
    }

    static all(): Promise<Article[]> {
        return new Promise((resolve, reject) => {
            $.ajax('/api/articles/', {
                type: 'get',
                success: resolve,
                error: reject
            });
        }).then((response: any) => {
            return response.map((article) => {
                return new Article(article.id, article.title, article.text);
            })
        });
    }

    static get(id: number): Promise<Article> {
        return new Promise((resolve, reject) => {
            $.ajax(`/api/articles/${id}`, {
                type: 'get',
                success: resolve,
                error: reject
            });
        }).then((response: any) => {
            return new Article(response.id, response.title, response.text);
        });
    }

    get title(): string {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
    }

    get text(): string {
        return this._text;
    }

    set text(text: string) {
        this._text = text;
    }

    save(): Promise<any> {
        if (this.id == null) {
            return this.saveCreate();
        } else {
            return this.saveUpdate();
        }
    }

    private saveCreate(): Promise<any> {
        return new Promise((resolve, reject) => {
            $.ajax('/api/articles', {
                type: 'post',
                data: { title: this.title, text: this.text },
                success: resolve,
                error: reject
            });
        });
    }

    private saveUpdate(): Promise<any> {
        return new Promise((resolve, reject) => {
            $.ajax(`/api/articles/${this.id}`, {
                type: 'patch',
                data: { title: this.title, text: this.text },
                success: resolve,
                error: reject
            });
        });
    }
}
