import TopBar from './TopBar';
import DisplayLeaderboard from './Leaderboard';
import leaderboardData from '../leaderboardData';

function App() {
  return (
    <>
      <TopBar/>
      <DisplayLeaderboard data={leaderboardData} /> 
    </>
  )
}

export default App;
