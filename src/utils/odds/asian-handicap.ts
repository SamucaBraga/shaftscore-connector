/**
 *  https://www.thesports.com/docs/
 * @param goal 
 * @returns 
 */
// Convert to text type (Asian handicap)
export function oddsToText(goal: number | null | undefined): string {
  const goalCn = [
    "Tie", "flat/half", "half ball", "half/one", "one ball", "one/half ball", "ball half", "ball half/two",
    "two balls", "Two/two balls and a half", "two balls and a half", "two balls and a half/three", "three balls",
    "three/three balls and a half", "Three balls and a half", "Three balls and a half/four balls", "Four balls",
    "Four/four balls and a half", "Four balls and a half", "Four balls and a half/five", "Five balls",
    "Five/five balls and a half", "Five balls and a half", "Five balls and a half/six", "Six balls",
    "six/six balls and a half", "Six balls and a half", "Six balls and a half/seven", "Seven balls",
    "Seven/seven balls and a half", "Seven balls and a half", "Seven balls and a half/eight", "Eight balls",
    "Eight/eight balls and a half", "Eight Half ball", "Eight ball half/nine", "Nine ball", "Nine ball and half",
    "Nine ball and half", "Nine ball and half/ten", "Ten Balls"
  ];

  if (!goal || goal === '.') {
    return '';
  } else {
    if (goal > 10 || goal < -10) {
      return `${goal} ball`;
    } else if (goal >= 0) {
      return goalCn[Math.abs(Math.floor(goal * 4))];
    } else {
      return `receive ${goalCn[Math.abs(Math.floor(goal * 4))]}`;
    }
  }
}