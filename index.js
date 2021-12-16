let myLeads = [];
const inputEl = document.getElementById("input-el")
inputEl.textContent ="";
let inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value);
    inputEl.value=""
    
    renderLeads()
})






function renderLeads() {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++){
    
        //listItems += "<li><a href='" + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</a></li>"
        //template strings/literals
        listItems += `<li>
                        <a href='${myLeads[i]}' target='_blank'>
                         ${myLeads[i]}
                         </a>
                     </li>`

    //another method
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
        // ulEl.append(li)
    }
    ulEl.innerHTML = listItems;
}