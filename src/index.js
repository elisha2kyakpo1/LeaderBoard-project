const container = document.querySelector('.container');
const resultContainer = document.createElement('div');
const formContainer = document.createElement('div');
const form = document.createElement('form');
const contentContainer = document.createElement('div');
const title = document.createElement('hi');
const recentScores = document.createElement('h4');
const addYourScore = document.createElement('h4');

container.appendChild(contentContainer);
container.appendChild(title);
contentContainer.appendChild(formContainer);
formContainer.appendChild(form);
contentContainer.appendChild(resultContainer);
formContainer.appendChild(addYourScore);
resultContainer.appendChild(recentScores);

title.textContent = 'Leaderboard';