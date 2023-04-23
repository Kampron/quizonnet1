import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useToast } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";



export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()
     const navigate = useNavigate()
    const toast = useToast()
    
    const signup = async (username, email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/quizonnet/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
             },
            body: JSON.stringify({username, email, password})
        })
        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            // save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            // success toast
            toast({
            title: 'Account created successfully.',
            description: "Sign in into your account.",
            position: 'top',
            status: 'success',
            duration: 5000,
            isClosable: true,
         })

            
            // update the auth context
            dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)

            navigate('/login')
        }

    }

    return { signup, isLoading, error }
}