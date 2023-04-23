import { CountdownCircleTimer } from 'react-countdown-circle-timer'


const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60)
    const seconds = remainingTime % 60

    return `${minutes}:${seconds}`
}

const Timer = ({ setShowFinalScore, isPlaying }) => (


    <CountdownCircleTimer
        size={100}
        isPlaying={isPlaying}
        duration={1800}
        colors={['#ddd', '#4be329', '#F7B801', '#F0F465', '#ab0a07', '#cf0c1d']}
        colorsTime={[1800, 1500, 1200, 900, 600, 300]}
        onComplete={() => {
            setShowFinalScore(true)
        }}
    >
        {children}
    </CountdownCircleTimer>
)

export default Timer