import { useState, useEffect } from 'react';
import axios from 'axios'
import TopBar from './TopBar';
import DisplayLeaderboard from './Leaderboard';
import constantLeaderboardData from '../leaderboardData';

function App() {
    // const [leaderboardData, setLeaderboardData] = useState(constantLeaderboardData)
    const [leaderboardData, setLeaderboardData] = useState([])
    const [weights, setWeights] = useState([])

    useEffect(() => {

        const getLeaderboardData = async () => {
            try {
                // const response = await axios.get('http://localhost:5000/leaderboard-full')
                const response = await axios.get('https://kaggle-leaderboard-scraping-flask.onrender.com/leaderboard-full')

                console.log(response)
                setLeaderboardData(response.data.infos)
                setWeights(response.data.weights)
            } catch (error) {
                console.error(error)
            }
        }

        getLeaderboardData()

        const intervalId = setInterval(getLeaderboardData, 60000); // 60000 ms = 1 minute

        // Clear the timeout if the component unmounts
        return () => clearInterval(intervalId);
    }, [])

    return (
        <>
            <TopBar />
            <DisplayLeaderboard data={leaderboardData} weights={weights} />
        </>
    )
}

export default App;
