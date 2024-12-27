(function(){
    const parametros = new URLSearchParams(window.location.search);
    const lang = parametros.get('lang');
    let info = {};
    if(lang == "es"){
        //document.body.innerHTML='idioma espanol seleccionado';
        info = {
            btnCambiarIdioma: "Cambiar Idioma",
            mainTitle : "CHRISTIAN TERRAZAS - DESARROLLO DE SOFTWARE",
            sections: ["ACERCA DE MI", "LENGUAJES Y TECNOLOGIAS","MIS PROYECTOS", "CERTIFICACIONES"],
            abtMe: "Hola, soy un estudiante de Ingenieria de Sistemas de 6to semestre en la universidad NUR en Santa Cruz, Bolivia. Actualmente estoy enfocado en aprender y mejorar en el campo de Desarrollo Web Full Stack. Se me da bien aprender nuevas tecnologias y el trabajo en equipo.",
            tecnologies: ["Javascript/NodeJs", "Express", "HTML/CSS", "PostgreSQL", "MySQL","Git/Github", "VirtualBox", "Java"],
            tecnologiesText: "Lenguajes de programacion y tecnologias en los que tengo experiencia",
            proyectos: [
                {title: "Titan Ironworks E-commerce", descr: "Sitio web de una empresa ficticia que vende equipamiento de gimnasio, cuenta con el frontend hecho con html y css puro, ademas del backend hecho con node y express, se conecta con una base de datos PostgreSQL y usa el patron de diseno repository. El proyecto aun no esta terminado. El codigo esta en el link abajo: ", link: null}, 
                {title: "Portafolio Web", descr: "Es el proyecto que estas viendo ahora mismo, cambia de idioma a eleccion del usuario y recuerda el idioma seleccionado la proxima que entres. Solo frontend con html, css y javascript usando localstorage. El link al codigo esta abajo: ", link: null}],

            certificates: [
                {title: "Intrduccion a la Ciberseguridad", link: null}, 
                {title: "Introduccion a la Ingenieria de Software", link: null}]

        }
    }
    else if(lang == "en"){
        //document.body.innerHTML='idioma ingles seleccionado';
        info = {
            btnCambiarIdioma: "Change Language",
            mainTitle : "CHRISTIAN TERRAZAS - SOFTWARE DEVELOPER",
            sections: ["ABOUT ME", "SKILLS AND TECHNOLOGIES","MY PROJECTS", "CERTIFICATIONS"],
            abtMe: "Hi, I’m a Software Engineering student at NUR University in Santa Cruz, Bolivia. I’m currently focused on learning and building Full Stack Web Development projects. I excel at acquiring new skills, learning modern technologies, and collaborating with other developers.",
            tecnologies: ["Javascript/NodeJs", "Express", "HTML/CSS", "PostgreSQL", "MySQL","Git/Github", "VirtualBox", "Java"],
            tecnologiesText: "Programming languages and technologies that I have experience working with.",
            proyectos: [
                {
                title: "Titan Ironworks E-commerce", 
                descr: "A Full Stack Website for a fictional e-commerce brand called Titan Ironworks. The front end was built using pure HTML, CSS, and JavaScript, while the back end runs on Node.js and Express. The application uses a PostgreSQL database to process and store data. Link:",
                link: null
                },
                {
                title: "Web Portfolio",
                descr: "This dynamic web portfolio updates its content based on the user’s selected language using JavaScript.", 
                link: null
                }
            
            ],
            certificates: [{title: "Introduction to CyberSecurity", link: null}, {title: "Introduction to Software Engineering", link: null}]
            
        }
    }
    else{document.location.href='index.html';}

    const btnIdioma = document.querySelector('#btnCambiarIdioma');
    btnIdioma.innerHTML = info.btnCambiarIdioma;
    btnIdioma.addEventListener('click', ()=>{
        localStorage.removeItem('lang');
        document.location.href = 'index.html';
    });




})()