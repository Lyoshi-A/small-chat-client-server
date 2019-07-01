import {User} from './user';
import {Action} from './action';

export interface List {
    users?: User[];
    action?: Action;
}
