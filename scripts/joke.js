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

    console.log(typeof(newId));
    console.log(newId);
    console.log(option);
    console.log(joke);

    localStorage.setItem("id", JSON.stringify(newId));
    localStorage.setItem("grade", JSON.stringify(option));
    localStorage.setItem("joke", joke);

    console.log(localStorage);
}

jokeButton.addEventListener('click', displayJoke);
skipButton.addEventListener('click', displayJoke);
storeButton.addEventListener('click', storeJoke);
submitButton.addEventListener('click', addToTheList);


