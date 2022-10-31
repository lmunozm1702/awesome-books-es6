import { DateTime } from './luxon.js';

const setCurrentTime = () => {
  const newFormat = { ...DateTime.DATETIME_MED_WITH_SECONDS, month: 'long' };
  return (DateTime.local().toLocaleString(newFormat));
};

export default setCurrentTime;