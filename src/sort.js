const topScores = (scores) =>{
  scores.sort((a, b) => {
    return parseInt(b.score, 10) - parseInt(a.score, 10);
  })
};

export default topScores;