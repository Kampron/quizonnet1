import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useToast } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";



export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()
    const navigate = useNavigate()
    const toast = useToast()
    
    const login = async ( email, password ) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/quizonnet/user/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ email, password })
        });

        const json = await response.json();

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        };

        if (response.ok) {
            // save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            // success toast
            toast({
            title: 'Logged in successfully',
            position: 'top',
            status: 'success',
            duration: 5000,
            isClosable: true,
         })

            
            // update the auth context
            dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)

            navigate('/quiz')
        }
    }

    return { login, isLoading, error }
}