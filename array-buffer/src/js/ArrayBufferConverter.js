export default class ArrayBufferConverter {
  constructor(buffer = null) {
    this.load(buffer);
  }

  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    return String.fromCharCode(...new Uint16Array(this.buffer));
  }
}
