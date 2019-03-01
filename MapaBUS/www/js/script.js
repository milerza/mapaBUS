if ('serviceWorker' in navigator){
    window.addEventListener('load', ()=>{
      navigator.serviceWorker.register('./sw.js') 
      .then( reg =>{
          console.log('SW registrado', reg)
      })
      .catch(erro => {
        console.log('Falha no registro do SW', erro)
      })
    })
}

$(document).ready(function(){
  $('.modal').modal();
  $('select').formSelect();
});
