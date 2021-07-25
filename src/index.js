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

const displayScores = () => {
  if (leaderboard !== null) {
    leaderboard.forEach((ele) => {
      const row = document.createElement('tr');
      const allScores = getScores();
      // const sorted = topScores(allScores.result);
      row.innerHTML = `
        <td>${ele.name}</td>
        <td>${ele.score}</td>
      `;
      leaderboardContainer.appendChild(row);
    })
  }
  console.log(leaderboard);
};

const addData = () => {
  const names = document.querySelector('.name').value;
  const scores = document.querySelector('.score').value;
  const scoresData = {
    name: names,
    score: scores,
  };

  if (names !== '' || scores != '') {
    leaderboard.push(scoresData);
  }
};

const clearFields = () => {
  document.querySelector('.name').value = '';
  document.querySelector('.score').value = '';
};

btn.addEventListener('click', () => {
  addData();
  clearFields();
  displayScores();
});

displayScores();