function sonido(evento){
    //'audio' guardo el sonido de cada tecla asignandole un 'keyCode' a cada una)
    const audio = document.querySelector(`audio[data-key="${evento.keyCode}"]`);
    //'tecla' guardo los elemento de la clase 'tecla'
    const tecla = document.querySelector(`.tecla[data-key="${evento.keyCode}"]`);
    
    if(!audio) return;
    //see puede tocar las teclas superponiendo el audio
    audio.currentTime = 0;
    audio.play();
    //agrego a la tecla presionada la clase 'tocando' que es la que defini en el css
    //cambiando de color y tamaño.
    tecla.classList.add('tocando');
  };
  
  /*evitar  que el efecto de transformación de la tecla se mantenga indefinidamente
  en el css transition mantiene la transformación de la tecla por 0.7s*/
  function removerTransicion(evento){
  //si el evento está asociado a un elemento con una prop distinta a transform salimos de la función
    if(evento.propertyName !== 'transform') return;
  //si la tecla tiene la prop de css  transform sacamos la clase 'tocando',su estilo queda sin efectos visuales luego de 0.7s
    this.classList.remove('tocando');
  };
  
  //todos los elementos con la clase 'tecla'
  const teclas = document.querySelectorAll('.tecla');
  //se remueve el estilo transition
  teclas.forEach(tecla => tecla.addEventListener('transitionend', removerTransicion));

  window.addEventListener('keydown', sonido);
  