/**
 *  https://www.thesports.com/docs/
 * @param goal 
 * @returns 
 */
// Convert to numeric type (Over/Under goals)
export function oddsToNum(goal: number | null | undefined): string {
  const goalCn = [
    "0", "0/0.5", "0.5", "0.5/1", "1", "1/1.5", "1.5", "1.5/2", "2", "2/2.5", "2.5", "2.5/3", "3", "3/3.5",
    "3.5", "3.5/4", "4", "4/4.5", "4.5", "4.5/5", "5", "5/5.5", "5.5", "5.5/6", "6", "6/6.5", "6.5",
    "6.5/7", "7", "7/7.5", "7.5", "7.5/8", "8", "8/8.5", "8.5", "8.5/9", "9", "9/9.5", "9.5", "9.5/10",
    "10", "10/10.5", "10.5", "10.5/11", "11", "11/11.5", "11.5", "11.5/12", "12", "12/12.5", "12.5",
    "12.5/13", "13", "13/13.5", "13.5", "13.5/14", "14"
  ];

  if (!goal || goal === '.') {
    return '';
  } else {
    if (goal > 14) {
      return `${goal}`;
    } else {
      return goalCn[Math.abs(Math.floor(goal * 4))];
    }
  }
}
