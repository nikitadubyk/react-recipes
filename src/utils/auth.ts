import { useState, useEffect } from 'react'
import { auth } from './firebase'
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    User,
} from 'firebase/auth'

export const createUser = async (email: string, password: string) =>
    await createUserWithEmailAndPassword(auth, email, password)

export const useAuth = () => {
    const [currentUser, setCurrentUser] = useState<User | null>(null)
    const [isLoaded, setIsLoaded] = useState<boolean>(false)

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => {
            if (user) {
                setCurrentUser(user)
            } else {
                setCurrentUser(null)
            }
            setIsLoaded(true)
        })
        return () => unsub()
    }, [currentUser])

    return { currentUser, isLoaded }
}

export const logIn = async (email: string, password: string) =>
    await signInWithEmailAndPassword(auth, email, password)

export const logOut = async () => {
    await signOut(auth)
}
