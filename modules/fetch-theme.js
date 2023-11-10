//Images
export default function FetchTheme(){
  const containerHeader = document.getElementById("header");
const h1Header = containerHeader.querySelector('h1')

const secondTextImage = document.querySelector('[data-image="image"]');
const bodyDocument = document.body;
const fistTextParagraphs = document.querySelector('[data-text="first-text"]')
const secondText = document.querySelector('[data-text="second-text"]')
const divider = document.querySelector('.divider')
const containerFooter = document.getElementById("footer");


//container.style.backgroundImage = 'url("./assets/black-and-blue-background.jpg")'
// secondTextImage.setAttribute('src', './assets/black-and-blue -background.jpg');
async function serchTheme(){
  const dataResponse = await fetch('./themesApi.json');
  const dataJSON = await dataResponse.json();
  console.log(dataJSON)
}
serchTheme();
}
