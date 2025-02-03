import { atom } from "recoil";
import { WorkerRole } from "../Types/Roles";

export const roleState = atom<WorkerRole>({
    key: 'roleState',
    default: 'doctor',
});

export const orgState = atom<string>({
    key: 'orgState',
    default: '',
});

export const orgList = atom<string[]>({
    key: 'orgList',
    default: [''],
});

export const licState = atom<string>({
    key: 'licState',
    default: '',
});

export const accState = atom<string>({
    key: 'accState',
    default: '',
});

export const pwState = atom<string>({
    key: 'pwState',
    default: '',
});