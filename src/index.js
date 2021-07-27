import { getScores, postScore } from './api';
import topScores from './sort';
import './style.css';

const leaderboardContainer = document.querySelector('#list');
const btn = document.querySelector('#submit');


const displayScores = async () => {
  const api = await getScores();
  const sortedData = topScores(api.result).splice(0, 100);
  sortedData.forEach((ele) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${ele.user}</td>
      <td>${ele.score}</td>
    `;
    leaderboardContainer.appendChild(row);
  });
};

const clearFields = () => {
  document.querySelector('.name').value = '';
  document.querySelector('.score').value = '';
};

btn.addEventListener('click', () => {
  const names = document.querySelector('.name').value;
  const scores = document.querySelector('.score').value;

  if (names !== '' || scores !== '') {
    postScore(names, scores);
    clearFields();
  }
});

displayScores();