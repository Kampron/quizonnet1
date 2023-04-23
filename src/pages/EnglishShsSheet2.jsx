
import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Grid, Heading, HStack, ListItem, Radio, RadioGroup, Spacer, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, UnorderedList, VStack} from "@chakra-ui/react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {Link, useLocation, useNavigate} from 'react-router-dom';
import Timer from '../components/CountDownTimer/CTD30';

import { useSelector, useDispatch } from "react-redux";
import * as Action from '../redux/question_reducer'
import { PushUserAnswer, PushAnswer, RestResultAction, usePublishResult } from "../hooks/setResult";
import { updateResultAction } from "../redux/result_reducer";
import { attempts_Number,  earnPoints_Number, flagResult, getResult, wrong_Answers } from "../helper/helper";
import { useAuthContext } from "../hooks/useAuthContext";
import useIdle from '../hooks/useIdleTimer';
import { useLogout } from '../hooks/useLogout';





const EnglishShsSheet2 = () => {
  const dispatch = useDispatch()
  const {user} = useAuthContext()
  const [getData, setGetData] = useState({ isLoading: false, apiData : [], serverError: null })
  const [showFinalScore, setShowFinalScore] = useState(false)
  const [isPlaying, setIsplaying] = useState(false)
  const [checked, setChecked] = useState(undefined)

  const location = useLocation();
  const data = location.state;
  // console.log(data);
  const nav = useNavigate()
  const { logout } = useLogout()
  const { isIdle } = useIdle({ onIdle: logout , idleTimer: 360})

  useEffect(() => {
     setGetData(prev => ({...prev, isLoading : true}));

      (async () => {
            try {
                const question = await data.questions

      if(question.length > 0) {
        // setGetData(prev => ({...prev, isLoading : false}))
        // setGetData(prev => ({...prev, apiData : question}))
        // console.log(question)

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
    
    const result = useSelector(state => state.result.result)
    const answers = useSelector(state => state.result.answer)
    
    const state = useSelector(state => state)
    const question = useSelector(state => state.questions.queue[state.questions.trace])
     const track = useSelector(state => (state.questions.trace) + 1)  
     const {trace} = useSelector(state => state.questions)  
     const PrevResult = useSelector(state => state.result.result[trace])
    const {queue} = useSelector(state => state.questions) 

    useEffect(() => {
        // console.log(isLaoding)
        // console.log(apiData)
        // console.log(serverError)
        // console.log(question)
        // console.log(state)
        // console.log(user)
        console.log(result)
        console.log(answers)
        // console.log(PrevResult)
    })


      useEffect(() => {
        console.log({trace, checked})
        setChecked(value)
        if (value){
          dispatch(updateResultAction({trace, checked}))
        }
        
      })



const quitBtn = () => {
  if (window.confirm('Are you sure you want to quit?')) {
    nav('/quiz')
 }

}

const totalPoints = queue.length * 1
const attempts = attempts_Number(result)
const earnPoints = earnPoints_Number(result, answers, 1)
const wrongAnswers = wrong_Answers(result, answers, 1)
const flag = flagResult(totalPoints, earnPoints)
const length = data.questions.length 

console.log(earnPoints)
console.log(wrongAnswers)
console.log(length)
console.log(result.length)

/** store user result */
  usePublishResult({username : user?.user.username, result: result, length: length,  attempts: attempts, points: earnPoints, achieved: flag? "passed" : "Failed" })




  let remarks = ''
  const percentScore = Math.floor((earnPoints/data.questions.length) * 100)

  if(percentScore <= 30) {
    remarks = 'You need more practice'
  }else if (percentScore > 30 && percentScore <= 50) {
    remarks = 'Better luck next time'
  }else if (percentScore <= 70 && percentScore > 50) {
    remarks = 'You can do better'
  }else if (percentScore >= 71 && percentScore <= 84) {
    remarks = 'You did great!'
  }else {
    remarks = 'You|\'re an absolute genius '
  }





  function restartQuiz() {
    setShowFinalScore(false)
    setChecked('')
    setValue('')
    setIsplaying(false)
    dispatch(Action.resetAllAction())
    dispatch(RestResultAction())
  }


function onNext() {
    console.log('On Next click')
    if(track < queue.length){
      dispatch(Action.moveNextAction())

      /** insert a new result in the array */
      if(result.length <= trace) {
        dispatch(PushUserAnswer(value))
        dispatch(PushAnswer(question?.answer))
      }
      
      setValue('')
      setChecked('')
      
    } 

    if (track >= 1) {
      setIsplaying(true)
    } else {
      setIsplaying(false)
    }
}



function onPrev() {
    console.log('On OnPrev click')
    if(track > 1){
      dispatch(Action.movePrevAction())
    } 
    setValue('')   
    // if( trace <= result.length){
    //   value(PrevResult)
    // }
}

function Done() {
  dispatch(PushUserAnswer(value))
  dispatch(PushAnswer(question?.answer))
  setShowFinalScore(true)
}

const [value, setValue] = useState('')
console.log(value)

const [results, setResults] = useState([])

// useEffect(() => {
//   getResult('/quizonnet/results/shs/english', (res) => {
//     setResults(res)
    
//   })
// })
useEffect(() => {
    const fetchResults = async () => {
      const response = await fetch('/quizonnet/results/shs/english',{
        headers: {
          'Content-Type': 'application/json'
       }
      }) 
      const data = await response.json()

      if(response.ok) {
        setResults(data)
        console.log('results:',results)
      }
    }

    if(showFinalScore === true) {
      fetchResults()
    }

  }, [showFinalScore])



  return (
    <>
      { user && !isIdle ? (
        <>
          <HelmetProvider >
        <Helmet><title>Start Quiz</title></Helmet> 
      </HelmetProvider>

      <Box
        color={'gray.900'}
        bg={('gray.300')}
        p={'10'}
        maxW={800} 
        my={'10'}
        mx={[4,4,5,'auto']}
        borderRadius={5}
      >
        {showFinalScore ? (
          <>
           <HelmetProvider >
              <Helmet><title>Final Score</title></Helmet> 
           </HelmetProvider>
            <Box>
              <VStack spacing={3}>
                <Heading>Quiz has ended</Heading>
                <Text></Text>
                <Text> {attempts} out of {data.questions.length} </Text>
                <Text color={'blue.500'} fontSize='4xl'>Your Score: {percentScore}%</Text>
                <Text>{remarks}</Text>
              </VStack>
              <Box mb={5} mt={5}>
              <Flex>
                  <UnorderedList listStyleType={'none'}>
                    <ListItem>Username:</ListItem><br />
                    <ListItem>Number Questions:</ListItem><br />
                    <ListItem>Attempted Questions:</ListItem><br />
                    <ListItem>Correct Answers:</ListItem><br />
                    <ListItem>Wrong Answers:</ListItem>
                  </UnorderedList>
                  <Spacer/>
                  <UnorderedList listStyleType={'none'}>
                    <ListItem className="capitalize">{user.user.username}</ListItem><br/>
                    <ListItem>{data.questions.length}</ListItem><br/>
                    <ListItem>{attempts || 0}</ListItem><br/>
                    <ListItem>{earnPoints || 0}</ListItem><br/>
                    <ListItem>{wrongAnswers || 0}</ListItem>
                  </UnorderedList>
                </Flex>
              </Box>
              {/* <TableContainer>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Attempts</Th>
                            <Th>Earn Points</Th>
                            <Th>Results</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                      {!results ?? <div>No Data Found</div>}
                      {
                        results.map((r, i) => {
                          <Tr key={i}>
                            <Td className="capitalize">{r?.username || ''}</Td>
                            <Td>{r?.attempts || 0 }</Td>
                            <Td>{r?.points|| 0}</Td>
                            <Td style={{color : `${flag ? "#2aff95" : "#ff2a66"}`}}>{r?.achieved || ''}</Td>
                        </Tr>
                        })
                      }
                        
                    </Tbody>
                </Table>
              </TableContainer> */}
              <HStack mt={10}>
                <Button onClick={restartQuiz}>Restart</Button>
                <Button onClick={quitBtn}>Quit</Button>
                <Button>
                  <Link to={"/reviseAnswers"} state={data}>Review Answers</Link>
                </Button>
              </HStack>
            </Box>
          </>
        ) : (
          <>
            <HelmetProvider >
              <Helmet><title>English | SHS </title></Helmet> 
            </HelmetProvider>
            <Box>
              <VStack>
                <Heading align={'center'}>ENGLISH LANGUAGE</Heading>
                <Text>OBJECTIVE TEST</Text>
                <Text>WASSCE {data.month} {data.year} </Text>
                <Heading size={'md'} align={'center'} mb='3'>LEXIS AND STRUCTURE</Heading>
              </VStack>
              <Flex alignItems={'center'}>
                <Text>{track} of {data.questions.length}</Text>
                    <Spacer />
                <Timer setShowFinalScore={setShowFinalScore} isPlaying={isPlaying} />
              </Flex>
              <Heading  size='md' align={'center'} mb={3}>{question?.section}</Heading>
              <Text align={'center'} m={5}>{question?.instructions}</Text>
            </Box>
            <Box>
              <Box>
                <Text fontWeight='medium' fontSize='lg' mb={'3'}>
                    {question?.question}
                </Text>
                  <Text fontWeight='medium'  fontSize='lg' mb={'3'}>
                    {question?.sub1}
                  </Text>
                  <Text fontWeight='medium'  fontSize='lg' mb={'3'}>
                    {question?.sub2}
                  </Text>
              </Box>

              <RadioGroup onChange={setValue}  value={ PrevResult? PrevResult : value }   >
                <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={6}>
                    <Radio size='lg' borderColor='black' colorScheme='green' value={question?.optionA} >
                    <Text fontWeight='medium' fontSize='medium' >𝐀.   {question?.optionA}</Text> 
                    </Radio>
                    <Radio size='lg' colorScheme='green' borderColor='black' value={question?.optionB}>
                    <Text fontWeight={'medium'} fontSize='medium'>𝐁.   {question?.optionB}</Text>
                    </Radio>
                    <Radio size='lg' colorScheme='green' borderColor='black' value={question?.optionC}>
                    <Text fontWeight={'medium'} fontSize='medium'>𝐂.  {question?.optionC}</Text>
                    </Radio>
                    <Radio size='lg' colorScheme='green'borderColor='black' value={question?.optionD}>
                    <Text fontWeight={'medium'} fontSize='medium'>𝐃.  {question?.optionD}</Text>
                    </Radio>
                </Grid>
                </RadioGroup>
              <Flex mt={10}>
                {trace > 0 ? <Button borderRadius={1} bg={'yellow.300'} color={'black'}onClick={onPrev} >Prev</Button> : <></>}
                <Spacer />
                {(track === data.questions.length)? (
                  <Button borderRadius={1} bg={'green.300'} color={'black'} onClick={Done}>Done</Button>
                ): (
                  <Button borderRadius={1} bg={'green.300'} color={'black'} onClick={onNext}>Next</Button>
                )} 
             </Flex>
            </Box>
            <Box>
            <HStack mt={'10'} spacing={50}>
               <Button onClick={quitBtn}>Quit</Button>
               <Button><Link to={'/englishshs'}>Back</Link></Button>
            </HStack>
            </Box>
          </>
        )}
      </Box>
    </>
      ): nav('/englishshs')}
      
    </>
  )
}

export default EnglishShsSheet2