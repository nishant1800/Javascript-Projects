// to app javascript code

document.addEventListener("DOMContentLoaded", function() {
    let inp = document.querySelector("input");
    let btn = document.querySelector("button");
    let li = document.querySelector(".list");

    btn.addEventListener("click", function() {
        if(inp.value.trim() !== "") {
            let newList = document.createElement("li");
            let span = document.createElement("span");
            span.innerText = inp.value;
            newList.appendChild(span);

            let delButton = document.createElement("button");
            delButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
            delButton.className = "del-Button";

            delButton.addEventListener("click", function() {
                li.removeChild(newList);
            })
            newList.appendChild(delButton);
            li.appendChild(newList);
            inp.value = "";
        }
    });
})