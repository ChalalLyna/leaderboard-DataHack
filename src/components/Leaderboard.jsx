const LeaderboardRow = ({ rank, team, challenges }) => {
    return (
      <tr>
        <td>{rank}</td>
        <td>{team}</td>
        {challenges.map((challenge, index) => (
        <td key={index}>{challenge}</td> 
      ))}
      </tr>
    );
  };
  
  // Component to render the entire leaderboard
  const DisplayLeaderboard = ({ data }) => { // Changed component name here
    return (
      <div className="leaderboard-container">
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Team</th>
              <th>Challenge 01</th>
              <th>Challenge 02</th>
              <th>Challenge 03</th>
              <th>Challenge 04</th>
              <th>Challenge 05</th>
              <th>Challenge 06</th>
              <th>Challenge 07</th>
              <th>Challenge 08</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => (
              <LeaderboardRow key={index} {...entry} />
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default DisplayLeaderboard; // Changed export name here
  