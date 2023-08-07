import { atom } from 'recoil'

export const profileAtom = atom({
    key: 'profile',
    default: {
        isLoggedIn: false,
        id: null,
        email: null,
        role: 'BASIC'
    }
})