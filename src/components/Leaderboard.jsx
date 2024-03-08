const numberOfChallenges = 5;
const challenges = [
    "Challenge 01",
    "Challenge 02",
    "Challenge 03",
    "Challenge 04",
    "Challenge 05",
    "Challenge 06",
    "Challenge 07",
    "Challenge 08",
]

const LeaderboardRow = ({ rank, team, scores }) => {
    return (
        <tr>
            <td>
                {rank === 1 && <img src="/award.png" alt="1st" />}
                {rank === 2 && <img src="/award2.png" alt="2nd" />}
                {rank === 3 && <img src="/award3.png" alt="3rd" />}
                {rank > 3 && <p className="rank">{rank}</p>}
            </td>

            <td>{team}</td>

            {
                scores.map((score, index) => (
                    <td key={index}>{score}</td>
                ))
            }

        </tr>
    );
};

// Component to render the entire leaderboard
const DisplayLeaderboard = ({ data, weights }) => { // Changed component name here
    console.log('DisplayLeaderboard', data)
    return (
        <div className="leaderboard-container">
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Team</th>
                        {
                            challenges.slice(0, numberOfChallenges).map(challenge => <th>{challenge}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {data
                        .sort((a, b) => {
                            let aScore = 0;
                            let bScore = 0;
                            for (let i = 0; i < numberOfChallenges; i++) {
                                aScore += a.scores[i] * weights[i];
                                bScore += b.scores[i] * weights[i];
                            }
                            return bScore - aScore;
                        })
                        .map((entry, index) => {
                            entry.rank = index + 1;
                        return <LeaderboardRow key={entry.team} {...entry} />
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default DisplayLeaderboard; // Changed export name here

