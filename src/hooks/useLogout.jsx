import { useAuthContext } from "./useAuthContext"
import { useNavigate } from 'react-router-dom'

export const useLogout = () => {
    const {dispatch } = useAuthContext()
    const nav = useNavigate()

    const logout = () => {

        // remove user from storage
        localStorage.removeItem('user')

        // dispatch logout action
        dispatch({type: 'LOGOUT'})

        // navigate home
        nav('/')
    }

    return {logout}
}