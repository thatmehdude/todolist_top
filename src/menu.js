//function to load menu page
export function loadMenu(){
    const content = document.createElement('div');

    const heading = document.createElement('h1');
    heading.textContent = "Behold, the menu";
    const list = document.createElement('ul');
    const menu = ['Jollof rice', 'Amala', 'Porridge yam', 'Fufu'];
    menu.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        list.appendChild(listItem);
    });
    content.appendChild(heading);
    content.appendChild(list);

    return content;
}