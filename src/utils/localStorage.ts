import { IAppState } from '../store/state/app.state';

export const loadStorage = (): IAppState => {
    const serializedStore = localStorage.getItem('state');
    try {
        if (serializedStore === null) {
            return undefined;
        }
    } catch (error) {
        console.log('Error While Getting LocalStorage State!!!');
    }
    return JSON.parse(serializedStore);
};

export const saveStorage = (state: any): any => {
    try {
        const serializedState = JSON.stringify(state);
        return localStorage.setItem('state', serializedState);
    } catch (error) {
        console.log('Error While Saving LocalStorage State!!!');
    }
};
