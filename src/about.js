export function loadAbout(){
    const content = document.createElement('div');

    const heading = document.createElement('h1');
    heading.textContent = "About Chisom's Bistro";

    const paragraph = document.createElement('p');
    paragraph.textContent = "We are a restuarant dedicated to our customers needs, each meal is created with love and care."

    content.appendChild(heading);
    content.appendChild(paragraph);

    return content;
}