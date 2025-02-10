

(async function(){
    const parametros = new URLSearchParams(window.location.search);
    const lang = parametros.get('lang');
    let info = {};
    if(lang == "es"){
        //document.body.innerHTML='idioma espanol seleccionado';
        info = await fetch("./infoEs.json").then(response => response.json()).then(data => data);
    }
    else if(lang == "en"){
        //document.body.innerHTML='idioma ingles seleccionado';
        info = await fetch("./infoEn.json").then(response => response.json()).then(data => data);
        
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
            <p class="projectLink"><a href="${e.link||"#"}" target=_blank>${e.link? "Link al proyecto" : ""}</a></p>
        </div>`;
    });
    projectsDiv.innerHTML=projectsHtml;

    document.querySelector('#certificatesMainTitle').innerHTML=info.certificatesTitle;
    const certificatesDiv = document.querySelector('#certificatesContainer');
    let certificatesHtml ='';
    info.certificates.forEach(e => {
        certificatesHtml+= `<div class="certificate">
            <img src="img/certificate.jpg" alt="imagen de muestra" class="certificateImg">
            <h2><a href=${e.link || "#"} target=_blank class="certificateName">${e.title}</a></h2>
        </div>`;
    });
    certificatesDiv.innerHTML=certificatesHtml;

    
    document.querySelector('#contactMainTitle').innerHTML=info.contactTitle;

    

    
    
    

    



    




})()