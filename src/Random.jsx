function Random() {
  const randomNumber = Math.floor(Math.random() * 100);
  return <h1>Random Number: {randomNumber}</h1>;
}
export default Random;