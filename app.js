const textarea = document.querySelector("#text-to-be-translated");
const translateBttn = document.querySelector(".translate-button");
const translatedText = document.querySelector(".translated-output");

const errorHandler = (error) => {
  console.log(`Error occured ${error}`);
  alert(`Alert something happened with the server please try later`);
};

const putTranslatedTextInTheDiv = (text, div) => {
  const url = `https://api.funtranslations.com/translate/dothraki.json?text=${text}`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      const apiResponse = json.contents.translated;
      div.innerText = apiResponse;
    })
    .catch(errorHandler);
};

const translateEvent = () => {
  const inputText = textarea.value;
  putTranslatedTextInTheDiv(inputText, translatedText);
};

translateBttn.addEventListener("click", translateEvent);
