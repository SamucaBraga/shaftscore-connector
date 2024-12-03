type Odds = {
  win: number; // Winning odds
  draw: number; // Draw odds
  loss: number; // Losing odds
};

type Probabilities = {
  win: number; // Win probability
  draw: number; // Draw probability
  loss: number; // Loss probability
};

// Calculate the return rate
function calculateReturnRate(odds: Odds): number {
  const { win, draw, loss } = odds;
  return (win * draw * loss) / (win * draw + draw * loss + win * loss);
}

// Calculate the main win, draw, and loss probabilities
function calculateProbabilities(odds: Odds, returnRate: number): Probabilities {
  return {
    win: returnRate / odds.win,
    draw: returnRate / odds.draw,
    loss: returnRate / odds.loss,
  };
}

// Calculate the European average win, draw, or loss rate
function calculateAverageRate(rates: number[]): number {
  const total = rates.reduce((sum, rate) => sum + rate, 0);
  return total / rates.length;
}

// Calculate the Kelly odds
function calculateKellyOdds(
  odds: Odds,
  averageRates: Probabilities
): Probabilities {
  return {
    win: odds.win * averageRates.win,
    draw: odds.draw * averageRates.draw,
    loss: odds.loss * averageRates.loss,
  };
}

// Example usage
const exampleOdds: Odds = { win: 2.0, draw: 3.2, loss: 4.0 };
const exampleReturnRate = calculateReturnRate(exampleOdds);
const exampleProbabilities = calculateProbabilities(exampleOdds, exampleReturnRate);

console.log("Return Rate:", exampleReturnRate);
console.log("Probabilities:", exampleProbabilities);

const averageRates: Probabilities = {
  win: calculateAverageRate([0.5, 0.52, 0.48]),
  draw: calculateAverageRate([0.3, 0.28, 0.32]),
  loss: calculateAverageRate([0.2, 0.2, 0.2]),
};

const kellyOdds = calculateKellyOdds(exampleOdds, averageRates);
console.log("Kelly Odds:", kellyOdds);
