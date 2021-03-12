import GameSavingLoader from "./GameSavingLoader";
(async () => {
  try {
    const result = await GameSavingLoader.load();
    console.log(result);
  } catch (e) {
    console.error(e);
  }
})();

console.log('app worked');
