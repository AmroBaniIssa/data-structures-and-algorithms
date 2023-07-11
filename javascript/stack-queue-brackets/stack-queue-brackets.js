

function validateBrackets(str) {
    const stack = [];
    const openingBrackets = {
      "(": ")",
      "[": "]",
      "{": "}",
    };
    
    const closingBrackets = Object.values(openingBrackets);
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
      if (openingBrackets.hasOwnProperty(char)) {
        stack.push(char);
      } else if (closingBrackets.includes(char)) {
        if (stack.length === 0 || openingBrackets[stack.pop()] !== char) {
          return false;
        }
      }
    }
    return stack.length === 0;
  }

console.log(validateBrackets('{}(){}'))
console.log(validateBrackets('(){}[[]]'))
console.log(validateBrackets('[({}]'))
