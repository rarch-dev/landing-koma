/* fetch ("./data.json")
 .then(response => response.json())
 .then(data => {
console.log(data);
const text1 = document.querySelector("div#text1")
console.log(text1);

text1.innerHTML = `
  <h1>${data.text1.h1}</h1>
  <p>${data.text1.p}</p>`;
}) */

async function renderPage() {
    const response = await fetch("./data.json");
    const data = await response.json();
    
    const text1 = document.querySelector("div#bloquetexto1");
    text1.innerHTML = `
        <h1>${data.bloquetexto1.h1}</h1>
        <p>${data.bloquetexto1.p}</p>`;
    const text2 = document.querySelector("div#bloquetexto2");
    text2.innerHTML = `
        <h1>${data.bloquetexto2.h1}</h1>
        <p>${data.bloquetexto2.p}</p>`;
    const text3 = document.querySelector("div#bloquetexto3first");
    text3.innerHTML = `
        <h1>${data.bloquetexto3first.h1}</h1>
        <h4>${data.bloquetexto3first.h4}</h4>`;
    const text4 = document.querySelector("div#bloquetexto3second");
    text4.innerHTML = `
        <h4>${data.bloquetexto3second.h4}</h4>`;
}

renderPage();