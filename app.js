const appsToggle = document.querySelector(".apps-toggle-btn")
const appsContainer = document.querySelector(".apps-container")
const settingsBtn = document.querySelector(".settings")
const settingsOptions = document.querySelector(".settings-options")

appsContainer.innerHTML = apps.map((item, index) => {
  return (
      `
       <div class="app app-${index + 1}">
        <img src=${item.logo}>
        <h1>${item.title}</h1>
       </div> 
      `
  )
}).join("")


appsToggle.addEventListener("click", () => {
  appsContainer.classList.toggle("reveal")
})

settingsBtn.addEventListener("click", () => {
  settingsOptions.classList.toggle("reveal")
})

document.addEventListener("mousedown", (e) => {
  if (e.target != appsToggle) {
    console.log("apps");
    if (appsContainer.classList.contains("reveal")) {
      appsContainer.classList.remove("reveal")
    }
  }
  if(e.target != settingsBtn){
    console.log("settings");
    if (settingsOptions.classList.contains("reveal")) {
      settingsOptions.classList.remove("reveal")
    }
  }
})




