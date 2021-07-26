import './style.css';
import { getScores, postScore } from './api';
import topScores from './sort';

const leaderboardContainer = document.querySelector('#list');
const btn  = document.querySelector('#submit');
const leaderboard = [
  {
    name: 'elisha',
    score: 50,
  },
  {
    name: 'martin',
    score: 90,
  },
];

const displayScores = async () => {
  // if (leaderboard !== null) {
    // leaderboard.forEach((ele) => {
      const row = document.createElement('tr');
      const allScores = await getScores();
      const sorted = topScores(allScores.result);
      const newArr = sorted.slice(0, 11);

      newArr.forEach((ele) => {
        console.log(ele)
      row.innerHTML = `
        <td>${ele.user}</td>
        <td>${ele.score}</td>
      `;
      leaderboardContainer.appendChild(row);
    })
  // }
  // console.log(leaderboard);
};

// const addData = () => {
//   const names = document.querySelector('.name').value;
//   const scores = document.querySelector('.score').value;
//   const scoresData = {
//     name: names,
//     score: scores,
//   };

//   if (names !== '' || scores != '') {
//     leaderboard.push(scoresData);
//   }
// };

const clearFields = () => {
  document.querySelector('.name').value = '';
  document.querySelector('.score').value = '';
};

btn.addEventListener('click', () => {
  // addData();
  const names = document.querySelector('.name').value;
  const scores = document.querySelector('.score').value;
  postScore(names, scores);
  clearFields();
  // displayScores();
});

displayScores();