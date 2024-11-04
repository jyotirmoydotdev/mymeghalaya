export const handleClick = () => {
  if ("vibrate" in navigator) {
    navigator.vibrate(30);
  }
};