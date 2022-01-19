function random(arr) {
  let rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}

export { random };
