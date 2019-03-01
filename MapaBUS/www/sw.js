const CACHE_NAME = 'mapaBus',
urlCache = [
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    './',
    './index.html',
    './linha1.html',
    './linha2.html',
    './py/mapa.html',
    './manifest.json',
    './css/estilo.css',
    './css/materialize.css',
    './css/materialize.min.css',
    './js/script.js',
    './js/db.js',
    './js/jquery-3.3.1.js',
    './js/materialize.min.js',
    './img/icon-512x512.png',
    './img/404.png'
];

self.addEventListener('install', event => {
    console.log('SW instalado');
    event.waitUntil(

        caches.open(CACHE_NAME)
        .then( cache => {
            console.log('Cache adicionado');
            return cache.addAll(urlCache);    
        })
        .catch( erro => {
            console.log('Falha no registro do Cache', erro)
        })

    )
});

self.addEventListener('activate', event => {
    console.log('SW ativado');

    event.waitUntil(
        caches.keys()
        .then( listaCaches =>{
            return Promise.all( listaCaches.map( cache => {
               if (cache !== CACHE_NAME ) {
                   console.log('Cache deletado');
                   return caches.delete(cache);
               }
            }))
        })
    );

});

self.addEventListener('fetch', event => {
    console.log('Acessando recurso');
    event.respondWith(
        caches.match(event.request)
        .then( resposta => {
              return resposta || fetch(event.request)
              .then( pagina => {
                    return caches.open(CACHE_NAME)
                    .then( cache =>{
                        cache.put(event.request, pagina.clone());
                        return pagina;
                    })
              })
              .catch( function(){
                 return caches.match('./imagens/404.png') 
              })
        })
    )
});