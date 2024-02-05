export const timeFormat = (time) => {
    const totalSeconds = Math.floor(time / 1000);
  
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
  
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };