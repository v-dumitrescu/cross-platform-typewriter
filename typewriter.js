const words = ['ce faceti, prietenii mei?'];

function isWindowEnvironment() {
  try {
    if ((this === window)) {
      const elementPlaceholder = document.createElement('p');
      document.body.appendChild(elementPlaceholder);
      return elementPlaceholder;
    }
  } catch (e) {
    return false;
  }
}

function typeWriter(words, miliseconds) {
  let string = '';
  let index = 0;
  let indexChar = 0;
  let reverse = false;
  const lastWord = [...words].pop();
  let repeatIndex = 0;
  let elementText;

  if (isWindowEnvironment()) {
    elementText = isWindowEnvironment();
  }

  return function repeat(n) {
    setTimeout(() => {

      if (string === lastWord) repeatIndex++;

      index === words.length ? index = 0 : index;
      if (!reverse) {
        string += words[index][indexChar];
        console.log(string);
        elementText ? elementText.innerText = string : null;
        indexChar++;
        if (indexChar === words[index].length) {
          reverse = true;
        }
      } else if (reverse) {
        indexChar = indexChar - 1;
        string = string.slice(0, indexChar);
        console.log(string);
        elementText ? elementText.innerText = string : null;
        if (indexChar === 0 && string.length === 0) {
          index++;
          reverse = false;
          if (repeatIndex === n) return;

        }
      }

      repeat(n);
    }, miliseconds);
  }
}

typeWriter(words, 100)(1);
