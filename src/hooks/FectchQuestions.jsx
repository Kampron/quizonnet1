
/** fetch questions hook to fetch api data and set value to store */

import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useAuthContext } from "./useAuthContext"
/** redux actions */
import * as Action from '../redux/question_reducer'


export const useFetchQuestions = () => {

    const dispatch = useDispatch()
    const {user} = useAuthContext()
    const [getData, setGetData] = useState({ isLoading: false, apiData : [], serverError: null })
    
    useEffect(() => {
      setGetData(prev => ({...prev, isLoading : true}));

        /** async function fetch backend data */

        
        (async () => {
            try {
                const response = await fetch('/quizonnet/questions/shs/english',{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
       }
      }) 
      const question = await response.json()


      if(response.ok) {
        setGetData(prev => ({...prev, isLoading : false}))
        setGetData(prev => ({...prev, apiData : question}))
        console.log(question)

        /** dispatch an action */
      dispatch(Action.startExamAction(question))
      } else{
        throw new Error("No Question Available")
      }  
    } catch (error) {
                setGetData(prev => ({...prev, isLoading : false}))
                setGetData(prev => ({...prev, serverError : error}))
            }
        })();

    }, [dispatch])

    return [getData, setGetData]
}

/** MoveAction Dispatch function */

export const MoveNextQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.moveNextAction())
  } catch (error) {
    console.log(error)
  }
}

/** MoveAction Dispatch function */

export const MovePrevQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.movePrevAction())
  } catch (error) {
    console.log(error)
  }
}