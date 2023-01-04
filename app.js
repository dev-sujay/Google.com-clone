const appsToggle = document.querySelector(".apps-toggle-btn")
const appsContainer = document.querySelector(".apps-container")
const settingsBtn = document.querySelector(".settings")
const settingsOptions = document.querySelector(".settings-options")

appsContainer.innerHTML = apps.map((item, index)=>{
     return (
        `
       <div class="app app-${index + 1}">
        <img src=${item.logo}>
        <h1>${item.title}</h1>
       </div> 
        `
     )
}).join("")


appsToggle.addEventListener("click", (e) => {
  appsContainer.classList.toggle("reveal")
})

settingsBtn.addEventListener("click", (e) => {
  settingsOptions.classList.toggle("reveal")
})
