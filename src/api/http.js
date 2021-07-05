import axios from 'axios';

let baseUrl = '';

class Http {
    static parseUrl(url) {
        return `${baseUrl}/${url}`;
    }
}