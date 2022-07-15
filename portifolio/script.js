const selects = document.querySelectorAll("[data-select]");
const sections = document.querySelectorAll("[data-section]");
selects.forEach((el) => el.addEventListener("click", () => selectSection(el)));

function showElement(element) {
    element.classList.remove("hidden");
    element.classList.add("show");
}

function hideElement(element) {
    element.classList.remove("show");
    element.classList.add("hidden");
}

function selectSection(option) {
    selects.forEach((el) => el.classList.remove("selected"));
    option.classList.add("selected");
    sections.forEach((el) =>
        el.dataset.section === option.dataset.select ? showElement(el) : hideElement(el)
    );
}
