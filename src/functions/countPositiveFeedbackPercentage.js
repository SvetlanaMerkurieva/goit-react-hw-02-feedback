export function countPositiveFeedbackPercentage(good, total) {
  const positivePercentage = Math.round((good / total) * 100);
  return positivePercentage;
}
