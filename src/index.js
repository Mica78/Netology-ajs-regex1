export default class Validator {
  static validateUsername(username) {
    const reIncludeOnStartAndFinishAndSymbols = /^[^\d_-][a-z0-9_-]*[^\d_-]$/;
    const reIncludeFourNumbers = /\d\d\d\d/;
    return !reIncludeFourNumbers.test(username)
          && reIncludeOnStartAndFinishAndSymbols.test(username);
  }
}
