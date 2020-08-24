
// const BASE_URL = 'https://beer-or-milk.herokuapp.com/';
const BASE_URL = 'http://127.0.0.1:3000/';

console.log(process.env.NODE_ENV)

export const Register = async (params) => {
    let url = BASE_URL + 'enquetes'
    return fetch(url, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
             },
            method: 'post',
            body: JSON.stringify({
                enquete: params
            }),
        }).then((response) => {
            return response.json()
        }).then((data) => {
            return data;
        }).catch((error) => {
            console.error(error);
        });
}

export const Count = async () => {
    let url = BASE_URL + 'enquetes'
    return fetch(url, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        method: 'get'
    }).then((response) => {
        return response.json()
    }).then((data) => {
        return data;
    }).catch((error) => {
        console.error(error);
    });
}