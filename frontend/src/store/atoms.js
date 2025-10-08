import { atom } from 'jotai';

export const countAtom = atom(0);
export const themeAtom = atom('light');
export const doubleAtom = atom((get) => get(countAtom) * 2);

export const IncrementCountAtom = atom(null, (get, set, arg) => {
    if(arg !=null) 
        set(countAtom, get(countAtom) + arg);
    else
        set(countAtom, get(countAtom) + 1);
})