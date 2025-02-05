document.addEventListener("DOMContentLoaded", function() {
    loadProjects();
});
function addProject() {
    const projectInput = document.getElementById("projectInput");
    const projectName = projectInput.value.trim();
    if (projectName === "") {
        alert("Project name cannot be empty!");
        return;
    }
    let projects = JSON.parse(localStorage.getItem("projects")) || [];
    projects.push(projectName);
    localStorage.setItem("projects", JSON.stringify(projects));
    projectInput.value = "";
    loadProjects();
}
function loadProjects() {
    let projects = JSON.parse(localStorage.getItem("projects")) || [];
    let projectList = document.getElementById("projectList");
    projectList.innerHTML = "";
    projects.forEach((project, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${project} <button onclick="deleteProject(${index})">Delete</button>`;
        projectList.appendChild(li);
    });
}
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
function deleteProject(index) {
    let projects = JSON.parse(localStorage.getItem("projects"));
    projects.splice(index, 1);
    localStorage.setItem("projects", JSON.stringify(projects));
    loadProjects();
}