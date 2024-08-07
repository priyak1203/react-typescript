/* ########## DEFAULT PARAMETERS ########## */

// Normal Function
// function calculateScores(initialScore: number, penaltyPoints: number): number {
//   return initialScore - penaltyPoints;
// }

// Default Parameter
function calculateScores(
  initialScore: number,
  penaltyPoints: number = 0
): number {
  return initialScore - penaltyPoints;
}

const scoreAfterPenalty = calculateScores(100, 42);
console.log(scoreAfterPenalty);

const scoreWithoutPenalty = calculateScores(87);
console.log(scoreWithoutPenalty);
