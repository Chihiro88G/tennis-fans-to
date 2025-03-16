export function formatTime(time: number) {
  const hour = time % 24;
  return (hour % 12 || 12) + (hour < 12 ? "am" : "pm");
}
