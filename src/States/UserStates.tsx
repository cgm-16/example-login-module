import { atom } from "recoil";
import { WorkerRole } from "../Components/Types/Roles";

export const roleState = atom<WorkerRole>({
    key: 'roleState',
    default: 'doctor',
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