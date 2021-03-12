export default function sortByHealth(arrayChars) {
  return arrayChars.sort((first, second) => second.health - first.health);
}
