const setCurrentTime = () => {
  const n = new Date();
  const y = n.getFullYear();
  const m = n.toLocaleString('default', { month: 'long' });
  const d = n.getDate();

  const h = n.getHours();
  let mm = n.getMinutes();
  if (mm < 10) { mm = `0${mm}`; }
  let s = n.getSeconds();
  if (s < 10) { s = `0${s}`; }

  return (`${m} ${d}th ${y}, ${h}:${mm}:${s}`);
}

export default setCurrentTime;