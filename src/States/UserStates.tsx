import { atom } from "recoil";

export const roleState = atom({
    key: 'roleState',
    default: 'doc',
});

export const orgState = atom({
    key: 'orgState',
    default: '',
});

export const orgList = atom({
    key: 'orgList',
    default: [''],
});

export const licState = atom({
    key: 'licState',
    default: '',
});

export const accState = atom({
    key: 'accState',
    default: '',
});

export const pwState = atom({
    key: 'pwState',
    default: '',
});