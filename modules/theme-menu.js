export default function ButtonFunction(){
  const styleButton = document.querySelector('.style');
  const themeMenu = document.querySelector('.theme-menu');

  function toggleMenu(){
    themeMenu.classList.toggle('active');
    styleButton.classList.toggle('active');
  }


  if (themeMenu.classList.contains('active')) {
    // Adiciona a classe para exibir o menu
    themeMenu.classList.add('show-menu');
  } else {
    // Remove a classe após a transição para escondê-lo suavemente
    themeMenu.addEventListener('transitionend', () => {
      themeMenu.classList.remove('show-menu');
    }, { once: true });
  }

  function eventToggleMenu(event){
    toggleMenu();
  }

  styleButton.addEventListener('click', eventToggleMenu )
}
