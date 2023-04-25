import "./style.css";

const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
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
    const image = await response.json();
    console.log(image);
    const result = document.querySelector("#result");
    result.innerHTML = `<img src="${image}" width="512" />`;
});
