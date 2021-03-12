import reader from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load() {
    const response = await reader();
    return await json(response);
  }
}
