import { myFetch,myFetchDelete } from "./fetch";

export const postRegister = (param) => myFetch('/v1/war3_djq_www/login/create',param,'POST');

export const postLogin = (param) => myFetch('/v1/war3_djq_www/login/login',param,'POST');

export const postLoginCode = (mobile) => myFetch('/v1/war3_djq_www/login/code?mobile='+mobile,{},'POST');

export const postValidLoginCode = (mobile,code,pwd) => myFetch('/v1/war3_djq_www/login/validcode?mobile='+mobile+'&code='+code+'&pwd='+pwd,{},'POST');
