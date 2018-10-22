export function  shortDateFormat(dateObj) {
  return new Date(dateObj).toISOString().substr(5,5).replace('-','/');
}

export function dateFormat(dateObj) {
  return new Date(dateObj).toISOString().substr(0,10);
}
