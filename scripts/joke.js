const jokeButton = document.querySelector(".click-for-a-joke");
const skipButton = document.querySelector(".skip-joke");

async function displayJoke() {
    const newJoke = await getAJoke();

    let gottenJoke = document.querySelector(".joke-text");
    gottenJoke.textContent = newJoke;

    jokeButton.style.display = "none";

    const storeButton = document.querySelector(".store-joke");
    const skipButton = document.querySelector(".skip-joke");

    storeButton.style.display = "inline-block";
    skipButton.style.display = "inline-block";
}

jokeButton.addEventListener('click', displayJoke);
skipButton.addEventListener('click', displayJoke);


