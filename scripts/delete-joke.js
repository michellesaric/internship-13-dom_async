const deleteButton = document.querySelector(".delete-button");
const deleteModal = document.querySelector(".delete-modal");

function openModal() {
    deleteModal.style.display = "block";
}

function deleteJoke() {
    const div = document.querySelector("");
    div.id.remove();
}
deleteButton.addEventListener('click', openModal);