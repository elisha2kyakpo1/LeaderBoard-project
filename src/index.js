import './style.css';

const leaderboardContainer = document.querySelector('#list');
const btn = document.querySelector('#submit');
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

const hidden = () => {
  while (leaderboardContainer.lastElementChild) {
    leaderboardContainer.removeChild(leaderboardContainer.lastElementChild);
  }
};

const displayScores = async () => {
  hidden();
  if (leaderboard !== null) {
    leaderboard.forEach((ele) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${ele.name}</td>
        <td>${ele.score}</td>
      `;
      leaderboardContainer.appendChild(row);
    });
  }
};

const addData = () => {
  const names = document.querySelector('.name').value;
  const scores = document.querySelector('.score').value;
  const scoresData = {
    name: names,
    score: scores,
  };

  if (names !== '' || scores !== '') {
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