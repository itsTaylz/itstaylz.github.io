async function loadHTMLToElement(elementID, htmlFile) {
    const response = await fetch(htmlFile);
    const text = await response.text();
    document.getElementById(elementID).innerHTML = text;
}

loadHTMLToElement("testHolder", "test.html")
    .then(() => document.getElementById("abacaxi").style.setProperty("color", "purple"))