//function to load home page
export function loadHome(){
    const content = document.createElement('div');
    
    const heading = document.createElement('h1');
    heading.textContent = "Welcome to Chisom's Bistro";

    const paragraph = document.createElement('p');
    paragraph.textContent = "At Chisom's Bistro, we bring you the finest cuisine source from the best places. Each dish is prepared with love and would have you coming for more";

    content.appendChild(heading);
    content.appendChild(paragraph);

    return content;
}