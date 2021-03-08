const jokeButton = document.querySelector(".click-for-a-joke");
const skipButton = document.querySelector(".skip-joke");
const storeButton = document.querySelector(".store-joke");
const modal = document.querySelector(".modal");
const submitButton = document.querySelector(".submit-modal");

let gottenJoke = document.querySelector(".joke-text");

async function displayJoke() {
    const newJoke = await getAJoke();
    gottenJoke.textContent = newJoke;

    jokeButton.style.display = "none";

    storeButton.style.display = "inline-block";
    skipButton.style.display = "inline-block";
}

async function storeJoke() {
    modal.style.display = "block";
}

function addToTheList() {
    const option = document.querySelector("#grades").value;
    let newId = JSON.parse(localStorage.getItem("id")) + 1;
    const joke = gottenJoke.textContent;

    localStorage.setItem("id", JSON.stringify(newId));
    localStorage.setItem("grade", JSON.stringify(option));
    localStorage.setItem("joke", joke);

    let newDiv = document.createElement("DIV");
    newDiv.className = "jokes-list-member"
    newDiv.style.cssText = 'display: flex;flex-direction: column;justify-content: center;border: 1px solid white;border-radius: 10px;'
    let addedJoke = document.createElement("P");
    addedJoke.innerHTML = joke;
    newDiv.appendChild(addedJoke);
    let addedGrade = document.createElement("P");
    addedGrade.innerHTML = option;
    newDiv.appendChild(addedGrade);
    let deleteButton = document.createElement("BUTTON");
    deleteButton.innerHTML = "DELETE";
    deleteButton.className = "delete-button";
    newDiv.appendChild(deleteButton);

    document.querySelector(".jokes-list").appendChild(newDiv);

    modal.style.display = "none";

}

jokeButton.addEventListener('click', displayJoke);
skipButton.addEventListener('click', displayJoke);
storeButton.addEventListener('click', storeJoke);
submitButton.addEventListener('click', addToTheList);


