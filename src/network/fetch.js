import { baseUrl } from 'env';
import { JSEncrypt } from 'jsencrypt';
const encrypt = new JSEncrypt();
encrypt.setPublicKey(`-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDFsRGbGzAGX60J4GI4mYBXWij47/QFcqP/9bO2tmzj982EpEBhojR4F65ueJ7+dmpBLJaafAnA7cAB48SRhAkO6JH4RDUxGIBTDYfy0chsuVjbZypmOf0bROdS1wOi7MDNGzc3mTbxGaw6OUWwVZ+HR2oxEgDHDMpOliUIiZeDeQIDAQAB-----END PUBLIC KEY-----`);
export const myFetch = (url = '', params = {}, type = 'GET') => {
    let header = new Headers();
    header.set('Content-Type', 'application/json');
    header.set('access_token', params.access_token);
    header.set('Access-Token', params.access_token);
    header.set('ant_key', encrypt.encrypt(`DJQ!${new Date().getTime()}`));
    // console.log(encrypt.encrypt(`DJQ!${new Date().getTime()}`))
    if (type === 'GET' && Object.keys(params).length !== 0) {
        let queryStr = ''; //数据拼接字符串
        for (let key in params) {
            queryStr += key + '=' + params[key] + '&';
        }
        if (queryStr !== '') {
            queryStr = queryStr.substr(0, queryStr.lastIndexOf('&'));
            url = url + '?' + queryStr;
        }
        params = {}
    }
    return new Promise(function (resolve, reject) {
        let data = {
            method: type,
            headers: header,
        };
        if (type === 'POST') {
            delete params.access_token
            data.body = JSON.stringify(params);
        };
        fetch(baseUrl + url, data)
            // .then((response) => response.json())
            .then(
                (response) => {
                    if (response.ok) {
                        return response.json()
                    } else {
                        reject({code:response.status});
                    }
                }
            )
            .then((responseData) => {
                if (responseData.code) {
                    if (responseData.code === 200) {
                        resolve(responseData.data);
                    } else {
                        reject(responseData);
                    }
                } else {
                    if (responseData.status && responseData.status != 200) {
                        reject({ code: 405, data: responseData });
                    } else {
                        resolve(responseData)
                    }
                }
            })
            .catch((err) => {
                reject(err);
            });
    });
};
export const myFetchDelete = (url = '', params = {}, access_token) => {
    let header = new Headers();
    header.set('Content-Type', 'application/json');
    header.set('access_token', access_token);
    header.set('Access-Token', access_token);
    header.set('ant_key', encrypt.encrypt(`DJQ!${new Date().getTime()}`));

    return new Promise(function (resolve, reject) {
        let data = {
            method: 'POST',
            headers: header,
        };
        data.body = JSON.stringify(params);
        fetch(baseUrl + url, data).then((response) => response.json())
            .then((responseData) => {
                if (responseData.code) {
                    if (responseData.code === 200) {
                        resolve(responseData.data);
                    } else {
                        reject(responseData);
                    }
                } else {
                    if (responseData.status && responseData.status != 200) {
                        reject({ code: 405, data: responseData });
                    } else {
                        resolve(responseData)
                    }
                }
            })
            .catch((err) => {
                reject(err);
            });
    });
};
