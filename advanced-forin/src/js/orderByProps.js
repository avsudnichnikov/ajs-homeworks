export default function orderByProps(character, order) {
  const positionsOrder = [];
  const positionsAlphabet = [];

  for (const key in character) {
    if (order.includes(key)) {
      positionsOrder.push({ key, value: character[key] });
    } else {
      positionsAlphabet.push({ key, value: character[key] });
    }
  }

  positionsOrder.sort((first, second) => order.indexOf(first.key) - order.indexOf(second.key));
  positionsAlphabet.sort((first, second) => (first.key > second.key) ? 1 : -1);

  return [...positionsOrder, ...positionsAlphabet];
}
