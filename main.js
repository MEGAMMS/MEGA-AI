import "./style.css";

const form = document.querySelector("form");
const textarea = document.querySelector("textarea");
textarea.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("Dream").click();
    }
});
form.addEventListener("submit", async (e) => {
    showSpinner();
    e.preventDefault();
    const formData = new FormData(form);
    console.log(formData);
    const json = JSON.stringify({
        prompt: formData.get("prompt"),
    });
    console.log(json);
    const response = await fetch("http://localhost:8080/dream", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: json,
    });
    console.log(response);
    if (response.ok) {
        const image = await response.json();
        console.log(image);
        const result = document.querySelector("#result");
        result.innerHTML = `<img src="${image}" width="512" />`;
    } else {
        const err = await response.text();
        alert(err);
        console.log("i am here");
        console.error(err);
    }
    hideSpinner();
});

function showSpinner() {
    const button = document.querySelector("button");
    button.disabled = true;
    button.innerHTML = 'Dreaming... <span class="spinner">🧠</span>';
}

function hideSpinner() {
    const button = document.querySelector("button");
    button.disabled = false;
    button.innerHTML = "Dream";
}
