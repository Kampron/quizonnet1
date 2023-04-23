import React from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Timer from '../components/CountDownTimer/CTD30';
import { Link, useNavigate } from 'react-router-dom';
import { Bars } from 'react-loader-spinner'
import { Center, Radio, RadioGroup } from '@chakra-ui/react'
import { Button, Flex, Grid, HStack, Spacer, useBoolean, VStack } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  Box, 
  Text
} from '@chakra-ui/react'
import QuizNav from '../components/Quiz/QuizNav';
import useIdle from '../hooks/useIdleTimer';
import { useLogout } from '../hooks/useLogout';

const EnglishShs = () => {
  
  const [questions, setQuestions] = useState(null)
  const [value, setValue] = useState()
  const [easyMode, setEasyMode] = useBoolean()
  const {user} = useAuthContext()
  const nav = useNavigate()
  const { logout } = useLogout()
  const { isIdle } = useIdle({ onIdle: logout , idleTimer: 360})
 

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch('/quizonnet/questions/shs/english',{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
       }
      }) 
      const data = await response.json()

      if(response.ok) {
        setQuestions(data)
      }
    }

    if(user) {
      fetchQuestions()
    }

  }, [user])

  return (
    <>
      {!questions ? (  
        <div className='bg-[rgba(0,0,0,0.4)] h-screen overflow-hidden flex flex-col justify-center items-center min-h-screen py-[1rem] px-[0.5rem]'> 
          <section className='w-full max-w-[220px] max-h-[240px] flex items-center justify-center p-[3rem] bg-[rgba(0,0,0,0.4)] rounded-[5px]' >
            <Bars
            height="50"
            width="50"
            color="#fff"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass="flex justify-center items-center"
            visible={true}
            />
          </section>
        </div>
      ) : (
          <>
            {user && !isIdle ? (
              <div className='bg-[rgba(0,0,0,0.4)] min-h-screen'>
            <HelmetProvider >
              <Helmet><title>Quizonnet | English SHS</title></Helmet>
            </HelmetProvider>
            <QuizNav  />
            <Box
              pt={100}
              pb={50}
              maxW={900}
              mb={10}
              mx={[4, 4, 5, 'auto']}
              borderRadius={5}
            >
              <Accordion allowToggle m={10} >
                {questions && questions.map((question) => (
                  <AccordionItem key={question._id}>
                    <h2>
                      <AccordionButton _expanded={{ bg: 'teal', color: 'white' }}>
                        <Box flex='1' textAlign='left'>
                          Wassce {question.subject} {question.month} {question.year}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Box align={'left'}>  
                        <HStack>
                          <Button size={'xs'} onClick={setEasyMode.toggle}>
                            Strict Mode
                          </Button>
                          <Text fontSize={'xs'}>{easyMode ? "Yes" : "No" }</Text>
                        </HStack>                 
                        </Box>
                        <Box>
                         {easyMode ? (
                          <>
                            <Box>
                              <VStack>
                                <Heading align={'center'}>ENGLISH LANGUAGE</Heading>
                                <Text>OBJECTIVE TEST</Text>
                                <Text> WASSCE {question.month} {question.year} </Text>
                                <Heading size={'md'} align={'center'}>{question.questions[0].part}</Heading>
                                <Heading size={'md'} align={'center'}>{question.questions[0].label}</Heading>
                              </VStack>
                              <Flex alignItems={'center'}>
                                <Text>1 of {question.questions.length}</Text>
                                <Spacer />
                                <Timer />
                              </Flex>
                              <Heading size="md" align={'center'} mb={3}>{question.questions[0].section}</Heading>
                              <Text align={'center'} m={5}>{question.questions[0].instructions}</Text>
                            </Box>
                            <Box>
                              <Text fontWeight={'semibold'} size={'s'} mb={'5'}>
                                {question.questions[0].question}
                              </Text>
                              <RadioGroup onChange={setValue} value={value}>
                                <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={6}>
                                  <Radio color={'red.300'} size='md' colorScheme='green' value={question.questions[0].optionA} >
                                    <Text fontWeight={'medium'}>𝐀.   {question.questions[0].optionA}</Text> 
                                  </Radio>
                                  <Radio size='md' colorScheme='green' value={question.questions[0].optionB}>
                                    <Text fontWeight={'medium'}>𝐁.   {question.questions[0].optionB}</Text>
                                  </Radio>
                                  <Radio size='md' colorScheme='green' value={question.questions[0].optionC}>
                                    <Text fontWeight={'medium'}>𝐂.  {question.questions[0].optionC}</Text>
                                  </Radio>
                                  <Radio size='md' colorScheme='green' value={question.questions[0].optionD}>
                                    <Text fontWeight={'medium'}>𝐃.  {question.questions[0].optionD}</Text>
                                  </Radio>
                                </Grid>
                              </RadioGroup>                           
                              <Flex mt={10}>
                                <Button borderRadius={0} bg={'yellow.300'} color={'black'}>Prev</Button>
                                <Spacer />
                                <Button borderRadius={0} bg={'green.300'} color={'black'}>Next</Button>
                              </Flex>
                              <Button borderRadius={0}  mt={10}>
                                <Link to={'/englishshssheet2'} state={question}>Start Quiz </Link>
                              </Button>
                            </Box>
                          </>
                         ) : (
                          <>
                              <Box>
                                <VStack>
                                  <Heading align={'center'}>ENGLISH LANGUAGE</Heading>
                                  <Text>OBJECTIVE TEST</Text>
                                  <Text> WASSCE {question.month} {question.year} </Text>
                                  <Heading size={'md'} align={'center'}>{question.questions[0].part}</Heading>
                                  <Heading size={'md'} align={'center'}>{question.questions[0].label}</Heading>
                                </VStack>
                                <Flex alignItems={'center'}>
                                  <Text>1 of {question.questions.length}</Text>
                                  <Spacer />
                                  <Timer />
                                </Flex>
                                <Heading size="md" align={'center'} mb={3}>{question.questions[0].section}</Heading>
                                <Text align={'center'} m={5}>{question.questions[0].instructions}</Text>
                              </Box>
                              <Box>
                                <Text fontWeight='semibold' size={'s'} mb={'5'}>
                                  {question.questions[0].question}
                                </Text>

                                <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={6}>
                                  <Button >
                                    {question.questions[0].optionA}
                                  </Button>
                                  <Button>
                                    {question.questions[0].optionB}
                                  </Button>
                                  <Button>
                                    {question.questions[0].optionC}
                                  </Button>
                                  <Button>
                                    {question.questions[0].optionD}
                                  </Button>
                                </Grid>
                                <Button mt={10}>
                                  <Link to={'/englishshssheet'} state={question}>Start Quiz </Link>
                                </Button>
                              </Box>
                          </>   
                         )}
                          
                        </Box>    
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </Box>   
          </div>
            ) : nav('/')}
          </>
            
      )}    
    </>
    
  )
}

export default EnglishShs