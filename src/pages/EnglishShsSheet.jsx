
import React, { useState } from "react";
import { Box, Button, Flex, Grid, Heading, HStack, ListItem, Spacer, Text, UnorderedList, VStack} from "@chakra-ui/react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {Link, useLocation, useNavigate} from 'react-router-dom';
import Timer from '../components/CountDownTimer/CTD30';
import correctSound from '../assets/audio/correctSound.mp3'
import wrongSound from '../assets/audio/wrongSound.mp3'
import useIdle from '../hooks/useIdleTimer';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from "../hooks/useAuthContext";






const EnglishShsSheet = () => {
    const [showFinalScore, setShowFinalScore] = useState(false)
  const [currentQn, setCurrentQn] = useState(0)
  const [scores, setScores] = useState(0)
  const [isPlaying, setIsplaying] = useState(false)
  const [wAnswer, setWAnswer] = useState(0)

  const {user} = useAuthContext()
  const nav = useNavigate()
  const { logout } = useLogout()
  const { isIdle } = useIdle({ onIdle: logout , idleTimer: 1})
 

  const correctAudio = React.createRef()
  const wrongAudio = React.createRef()

  const location = useLocation();
  const data = location.state;
  console.log(data);

  const handleOptionClick = (e) => {
    if (currentQn + 1 >= 1) {
      setIsplaying(true)
    } else {
      setIsplaying(false)
    }

    if (e.target.textContent === data.questions[currentQn].answer) {
      correctAudio.current.play()
      correctAnswer()
    } else {
      wrongAudio.current.play()
      wrongAnswer()
    }
  }
  
const correctAnswer = () => {
  setScores(scores + 1) 
  if (currentQn + 1 < data.questions.length) {
    setCurrentQn(currentQn + 1)
  }else {
    setShowFinalScore(true)
  }
}

const wrongAnswer = () => {
  setWAnswer(wAnswer + 1)
  if (currentQn + 1 < data.questions.length) {
    setCurrentQn(currentQn + 1)
  }else {
    setShowFinalScore(true)
  }
  
}


const quitBtn = () => {
  if (window.confirm('Are you sure you want to quit?')) {
    nav('/quiz')
 }

}

  const restartQuiz = () => {
    setScores(0)
    setCurrentQn(0)
    setShowFinalScore(false)
    setIsplaying(false)
    setScores(0)
    setWAnswer(0)
  }


  let remarks = ''
  const percentScore = Math.floor((scores/data.questions.length) * 100)

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
  return (
    <>
      {user && !isIdle ? (
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
                <Text> {scores} out {data.questions.length} </Text>
                <Text color={'blue.500'} fontSize='4xl'>Your Score: {percentScore}%</Text>
                <Text>{remarks}</Text>
              </VStack>
              <Box mb={5} mt={5}>
              <Flex>
                  <UnorderedList listStyleType={'none'}>
                    <ListItem>Number Questions:</ListItem><br />
                    <ListItem>Attempted Questions:</ListItem><br />
                    <ListItem>Correct Answers:</ListItem><br />
                    <ListItem>Wrong Answers:</ListItem>
                  </UnorderedList>
                  <Spacer/>
                  <UnorderedList listStyleType={'none'}>
                    <ListItem>{data.questions.length}</ListItem><br/>
                    <ListItem>{(scores + wAnswer)}</ListItem><br/>
                    <ListItem>{scores}</ListItem><br/>
                    <ListItem>{wAnswer}</ListItem>
                  </UnorderedList>
                </Flex>
              </Box>
              <HStack>
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
              <Helmet><title>Quiz Page</title></Helmet> 
            </HelmetProvider>
            <>
              <audio ref={wrongAudio}  src={wrongSound} />
              <audio ref={correctAudio}  src={correctSound}  />
            </>
            <Box>
              <VStack>
                <Heading align={'center'}>ENGLISH LANGUAGE</Heading>
                <Text>OBJECTIVE TEST</Text>
                <Text>WASSCE {data.month} {data.year} </Text>
                <Heading size={'md'} align={'center'} mb='3'>LEXIS AND STRUCTURE</Heading>
              </VStack>
              <Flex alignItems={'center'}>
                <Text>{currentQn + 1} of {data.questions.length}</Text>
                    <Spacer />
                <Timer setShowFinalScore={setShowFinalScore} isPlaying={isPlaying} />
              </Flex>
              <Heading  size='md' align={'center'} mb={3}>{data.questions[currentQn].section}</Heading>
              <Text align={'center'} m={5}>{data.questions[currentQn].instructions}</Text>
            </Box>
            <Box>
              <Box>
                <Text fontWeight='semibold' size={'s'} mb={'3'}>
                    {data.questions[currentQn].question}
                </Text>
                  <Text fontWeight={'bold'} size={'s'} mb={'3'}>
                    {data.questions[currentQn].sub1}
                  </Text>
                  <Text fontWeight={'bold'} size={'s'} mb={'3'}>
                    {data.questions[currentQn].sub2}
                  </Text>
              </Box>
              <Grid templateColumns={{base:'repeat(1, 1fr)', md:'repeat(2, 1fr)'}} gap={6}>
                  <Box
                    onClick={handleOptionClick}
                    as='button'
                    maxW='lg'
                    height='40px'
                    borderRadius='5px'
                    bg={'gray.100'}
                    color={'gray.900'}
                    _hover={{ bg: 'gray.200' }}
                  >
                    <Text noOfLines={[3, 2, 1]} fontWeight='medium' fontSize={['xs','sm']}>{data.questions[currentQn].optionA}</Text>
                  </Box>
                  <Box
                    onClick={handleOptionClick}
                    as='button'
                    maxW='lg'
                    height='40px'
                    borderRadius='5px'
                    bg={'gray.100'}
                    color={'gray.900'}
                    _hover={{ bg: 'gray.200' }}
                  >
                    <Text noOfLines={[3, 2, 1]} fontWeight='medium' fontSize={['xs','sm']}>{data.questions[currentQn].optionB}</Text>
                  </Box>
                  <Box
                    onClick={handleOptionClick}
                    as='button'
                    maxW='lg'
                    height='40px'
                    borderRadius='5px'
                    bg={'gray.100'}
                    color={'gray.900'}
                    _hover={{ bg: 'gray.200' }}
                  >
                    <Text noOfLines={[3, 2, 1]} fontWeight='medium' fontSize={['xs','sm']}>{data.questions[currentQn].optionC}</Text>
                  </Box>
                  <Box
                    onClick={handleOptionClick}
                    as='button'
                    maxW='lg'
                    height='40px'
                    borderRadius='5px'
                    bg={'gray.100'}
                    color={'gray.900'}
                    _hover={{ bg: 'gray.200' }}
                  >
                    <Text noOfLines={[3, 2, 1]} fontWeight='medium' fontSize={['xs','sm']}>{data.questions[currentQn].optionD}</Text>
                  </Box>
              </Grid>
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
      ) : nav('/')}
     
    </>
  )
}

export default EnglishShsSheet