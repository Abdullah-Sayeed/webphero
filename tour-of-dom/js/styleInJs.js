const sections = document.querySelectorAll('section');

for(const section of sections){
    section.style.border = '2px solid steelblue';
    section.style.borderRadius = '15px';
    section.style.marginBottom = '7px';
    section.style.paddingLeft = '10px';
    section.style.backgroundColor = 'lightgray';
}

const placesContainer = document.getElementById('places-container');
placesContainer.style.backgroundColor = 'yellow';


placesContainer.classList.add('text-center');
placesContainer.classList.remove('large-text');