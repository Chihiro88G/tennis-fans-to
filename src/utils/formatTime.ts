export function formatTime(time: number) {
  const hour = Math.floor(time) % 24;
  const minutes = (time % 1 === 0.5) ? ":30" : "";
  const period = hour < 12 ? "am" : "pm";
  const hour12 = hour % 12 || 12;
  return `${hour12}${minutes}${period}`;
}