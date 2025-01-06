(function(){
    const parametros = new URLSearchParams(window.location.search);
    const lang = parametros.get('lang');
    let info = {};
    if(lang == "es"){
        //document.body.innerHTML='idioma espanol seleccionado';
        info = {
            btnCambiarIdioma: "Cambiar Idioma",
            mainTitle : "CHRISTIAN TERRAZAS - DESARROLLO DE SOFTWARE",
            sections: ["ACERCA DE MI", "LENGUAJES Y TECNOLOGIAS","MIS PROYECTOS", "CERTIFICACIONES", "CONTACTO"],
            abtMe: "¡Hola!, soy un estudiante de Ingenieria de Sistemas de 6to semestre en la universidad NUR en Santa Cruz, Bolivia. Actualmente estoy enfocado en aprender y mejorar en el campo de Desarrollo Web Full Stack. Tengo experiencia desarrollando aplicaciones web fullstack de muestra que funcionan con bases de datos PostgreSQL. Se me da bien aprender nuevas tecnologias, la comunicacion con los clientes y el trabajo en equipo.",
            tecnologies: ["Javascript/NodeJs", "Express", "HTML/CSS", "PostgreSQL", "MySQL","Git/Github", "VirtualBox", "Java"],
            tecnologiesText: "Lenguajes de programacion y tecnologias en los que tengo experiencia.",
            projectsTitle: "MIS PROYECTOS",
            projects: [
                {title: "Titan Ironworks E-commerce", descr: "Sitio web de una empresa ficticia que vende equipamiento de gimnasio, cuenta con el frontend hecho con html y css puro, ademas del backend hecho con node y express, se conecta con una base de datos PostgreSQL y usa el patron de diseno repository. El proyecto aun no esta terminado. El codigo esta en el link abajo: ", link: null}, 
                {title: "Portafolio Web", descr: "Es el proyecto que estas viendo ahora mismo, cambia de idioma a eleccion del usuario y recuerda el idioma seleccionado la proxima que entres. Solo frontend con html, css y javascript usando localstorage. El link al codigo esta abajo: ", link: null}],

            certificates: [
                {title: "Intrduccion a la Ciberseguridad", link: null}, 
                {title: "Introduccion a la Ingenieria de Software", link: null}],
            certificatesTitle: "CERTIFICACIONES",
            contactTitle:"CONTACTO"

        }
    }
    else if(lang == "en"){
        //document.body.innerHTML='idioma ingles seleccionado';
        info = {
            btnCambiarIdioma: "Change Language",
            mainTitle : "CHRISTIAN TERRAZAS - SOFTWARE DEVELOPER",
            sections: ["ABOUT ME", "SKILLS AND TECHNOLOGIES","MY PROJECTS", "CERTIFICATIONS", "CONTACT ME"],
            abtMe: "Hi!, I’m a Software Engineering student at NUR University in Santa Cruz, Bolivia. I’m currently focused on learning and building Full Stack Web Development projects. I have experience developing test fullStack web apps. I excel at acquiring new skills, learning modern technologies, and comunicating with clients.",
            tecnologies: ["Javascript/NodeJs", "Express", "HTML/CSS", "PostgreSQL", "MySQL","Git/Github", "VirtualBox", "Java"],
            tecnologiesText: "Programming languages and technologies that I have experience working with.",
            projectsTitle: "MY PROJECTS",
            projects: [
                {
                title: "Titan Ironworks E-commerce", 
                descr: "A Full Stack Website for a fictional e-commerce brand named Titan Ironworks. The front end was built using pure HTML, CSS, and JavaScript, while the back end runs on Node.js and Express. The application uses a PostgreSQL database to process and store data. Link:",
                link: null
                },
                {
                title: "Web Portfolio",
                descr: "This dynamic web portfolio updates its content based on the user’s selected language using JavaScript. A simple yet useful little project. Link:", 
                link: null
                }
            
            ],
            certificatesTitle: "CERTIFICATIONS",
            certificates: [{title: "Introduction to CyberSecurity", link: null}, {title: "Introduction to Software Engineering", link: null}],
            contactTitle:"CONTACT ME"
            
        }
    }
    else{document.location.href='index.html';}

    const btnIdioma = document.querySelector('#btnCambiarIdioma');
    btnIdioma.innerHTML = info.btnCambiarIdioma;
    btnIdioma.addEventListener('click', ()=>{
        localStorage.removeItem('lang');
        document.location.href = 'index.html';
    });

    document.querySelector('#mainTitle').innerHTML=info.mainTitle;
    document.querySelector('#abtMeTitle').innerHTML=info.sections[0];
    document.querySelector('#languagesTitle').innerHTML=info.sections[1];
    document.querySelector('#projectsTitle').innerHTML=info.sections[2];
    document.querySelector('#certificatesTitle').innerHTML=info.sections[3];
    document.querySelector('#contactTitle').innerHTML=info.sections[4];
    document.querySelector('#abtMeP').innerHTML=info.abtMe;
    document.querySelector('#languagesMainTitle').innerHTML=info.sections[1];
    document.querySelector('#languagesP').innerHTML=info.tecnologiesText;

    const languagesDiv = document.querySelector('#languagesList');
    let languagesHtml = '';
    info.tecnologies.forEach(e=>{
        languagesHtml += `<div class="language">&#x2022 ${e}</div>`
    });
    languagesDiv.innerHTML =languagesHtml;

    document.querySelector('#projectsMainTitle').innerHTML=info.projectsTitle;
    const projectsDiv = document.querySelector('#projectsContainer');
    let projectsHtml = '';
    info.projects.forEach(e => {
        projectsHtml+=`<div class="project">
            <h3 class="projectTitle">${e.title}</h3>
            <p class="projectDescr">${e.descr}</p>
            <p class="projectLink"><a href="${e.link||"#"}">${e.link? link : "Link not available"}</a></p>
        </div>`;
    });
    projectsDiv.innerHTML=projectsHtml;

    document.querySelector('#certificatesMainTitle').innerHTML=info.certificatesTitle;
    const certificatesDiv = document.querySelector('#certificatesContainer');
    let certificatesHtml ='';
    info.certificates.forEach(e => {
        certificatesHtml+= `<div class="certificate">
            <img src="img/certificate.jpg" alt="imagen de muestra" class="certificateImg">
            <h2><a href=${e.link || "#"} class="certificateName">${e.title}</a></h2>
        </div>`;
    });
    certificatesDiv.innerHTML=certificatesHtml;

    
    document.querySelector('#contactMainTitle').innerHTML=info.contactTitle;

    

    
    
    

    



    




})()