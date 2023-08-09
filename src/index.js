const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let arr = expr.split("**********");

  let result = arr.map(function (word) {
    let str = word;
    let numbers = [];
    for (let i = 0; i < word.length / 10; i++) {
      numbers.push(str.slice(0, 10));
      str = str.slice(10);
    }
    let letters = numbers.map(function (num) {
      console.log(typeof num);

      let letter = num
        .replace(/11/g, "-")
        .replace(/10/g, ".")
        .replace(/0+/g, " ") //разделяем на буквы в слове
        .replace(/^\s+|\s+$/g, "") //убираем лишние пробелы в начале и конце
        .split(" ") //разделяем слова на буквы для соотношения с ключами
        .map(function (letter) {
          return MORSE_TABLE[letter]; //получаем буквы
        });
      console.log(letter);
      return letter;
    });
    return letters.join("");
  });
  return result.join(" ");
}

module.exports = {
  decode,
};
