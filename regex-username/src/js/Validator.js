export default class Validator {
  static validateUsername(username) {
    return !/[^\w-]/.test(username) && !/^[\d-_]|[\d-_]$/.test(username) && !/\d{4}/.test(username);
  }
}
