(function (){

    const idioma = localStorage.getItem('lang');
    if(idioma){
        document.location.href = `portfolio.html?lang=${idioma}`;
    }

    document.querySelector('#english').addEventListener('click', () => {
        localStorage.setItem('lang', 'en');
        document.location.href = 'portfolio.html?lang=en';

    } );

    document.querySelector('#spanish').addEventListener('click', () => {
        localStorage.setItem('lang', 'es');
        document.location.href = 'portfolio.html?lang=es';
        
    } );
    



})()