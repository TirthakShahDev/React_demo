import { Model } from './helpers.state';
import { permission } from 'api/types';
import { RawRule } from '@casl/ability';

export interface IUser {
    email?: string;
    name?: string;
    roles?: string[];
    token? : string
}

const UserModel = Model<IUser>({
    email: null,
    name: null,
    roles: null,
    token : null
});

export class User extends UserModel {
    public static EMAIL = 'email';
    public static NAME = 'name';
    public static ROLES = 'roles';
    public static TOKEN = 'token'
    public LANGUAGE: 'language';

    public email: string;
    public name: string;
    public roles: string[];
    public token: string;
    public language: string;
    public permissions: permission[];
    public abilities: RawRule[];
}
