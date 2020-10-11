let style = document.createElement("style");

document.head.appendChild(style)

sheet = style.sheet

function getProjectTemplate(project){
    let links = project.links.reduce((prev, acc) => {
        let _class = "";
        if (acc.type == "github")
            _class = "fa fa-github"
        else if (acc.type == "website")
            _class = "fa fa-link"
        else if (acc.type == "research")
            _class = "fa fa-book"
        prev = prev + `<li><a href="${acc.url}"><i class="${_class}" aria-hidden="true"></i></a></i></li>`
        return prev;
    }, "")

    let template = `<div class="links">
                            <div class="links-bg"></div>
                            <div class="link-info">
                                <h3>${project.name}</h3>
                                <ul class="link-items">
                                    ${links}
                                </ul>
                            </div>

                        </div>`
    return template;
}

let skills = [{
    name: "HTML/CSS",
    id:  "HTMLCSS",
    progress: 70
}, {
    name: "NodeJS",
    id: "NodeJS",
    progress: 75
}, {
    name: "JavaScript",
    id: "JavaScript",
    progress: 75
}, {
    name: "Python",
    id: "Python",
    progress: 80
}, {
    name: "C",
    id: "C",
    progress: 65
}, {
    name: "C++",
    id: "Cplusplus",
    progress: 75
}]

let projects = [{
    name: "Indieverse",
    id: "indieverse",
    url: "./Resources/Images/Indieverse.jpg",
    links: [{
        type: "github",
        url: "https://github.com/PSIB0T/Indieverse"
    },{
        type: "website",
        url: "https://indieverse.herokuapp.com/"
    }]
}, {
    name: "Social champion identification",
    id: "sci",
    url: "./Resources/Images/social-media.png",
    links: [{
        type: "github",
        url: "https://github.com/dasUtsav/social-champion-identification"
    },{
        type: "research",
        url: "https://ieeexplore.ieee.org/document/8653753/"
    }]
}, {
    name: "FTerm",
    id: "fterm",
    url: "./Resources/Images/terminal_option.jpg",
    links: [{
        type: "github",
        url: "https://github.com/PSIB0T/FTerm"
    }]
}]

let skillsContainer = document.getElementById("skillsContainer")
let projectsContainers = document.getElementById("projectId")

for (const skill in skills) {
    let barEle = document.createElement("div");
    let precentage = document.createElement("span");
    barEle.setAttribute("id", skills[skill].id)
    barEle.setAttribute("skill-name", skills[skill].name)
    barEle.setAttribute("class", "bar")
    precentage.setAttribute("class", "perc")
    precentage.innerHTML = `${skills[skill].progress}%`
    // console.log(document.styleSheets)
    sheet.addRule(`#${skills[skill].id}::before`,`width: ${skills[skill].progress}%`);
    let childEle = document.createElement("div")
    childEle.setAttribute("class", "skills-container")
    childEle.appendChild(barEle)
    childEle.appendChild(precentage)
    skillsContainer.appendChild(childEle);
}

for (const project in projects){
    let tempProj = projects[project];
    let e = document.createElement("div")
    e.setAttribute("class", "project");
    e.setAttribute("id", tempProj.id);
    e.innerHTML = getProjectTemplate(tempProj);
    sheet.addRule(`#${tempProj.id}`, `background-image: url("${tempProj.url}")`)
    projectsContainers.appendChild(e);
}