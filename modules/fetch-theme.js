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

const themes = document.querySelectorAll('.theme-list')
//container.style.backgroundImage = 'url("./assets/black-and-blue-background.jpg")'
// secondTextImage.setAttribute('src', './assets/black-and-blue -background.jpg');
async function serchTheme(){
  try{
    const dataResponse = await fetch('./themesApi.json');
    const dataJSON = await dataResponse.json();
    
    

      dataJSON.forEach((theme, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<img src="${theme.thumb}" alt="" >`;
        document.querySelector('.theme-list').appendChild(li);
        
        function changeTheme(){
          h1Header.style.backgroundImage = `url(${theme[index].image-bg})`;
        }
        
        li.addEventListener('click', changeTheme)
      })
   
    
  }
  catch(error){
      console.log(error);
    }
}
serchTheme();
}

