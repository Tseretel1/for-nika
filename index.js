// create a new div element with class 'container3-cards-card'
const container3CardsCard = document.createElement('div');
container3CardsCard.classList.add('container3-cards-card');

// create a new div element with class 'container3-vegetable-parent'
const container3VegetableParent = document.createElement('div');
container3VegetableParent.classList.add('container3-vegetable-parent');

// create a new div element with class 'container3-vegetable-space'
const container3VegetableSpace = document.createElement('div');
container3VegetableSpace.classList.add('container3-vegetable-space');

// create a new div element with class 'container3-vegetable'
const container3Vegetable = document.createElement('div');
container3Vegetable.classList.add('container3-vegetable');
container3Vegetable.textContent = 'Vegetable';

// append 'container3VegetableSpace' and 'container3Vegetable' elements to 'container3VegetableParent'
container3VegetableParent.appendChild(container3VegetableSpace);
container3VegetableParent.appendChild(container3Vegetable);

// create a new img element with src 'indeximgs/brokoli.png' and width '80%'
const img = document.createElement('img');
img.setAttribute('src', 'indeximgs/brokoli.png');
img.setAttribute('width', '80%');
img.setAttribute('alt', '');

// create a new div element with class 'container3-card-texts' and text content 'calabrese brokoli'
const container3CardTexts = document.createElement('div');
container3CardTexts.classList.add('container3-card-texts');
container3CardTexts.textContent = 'calabrese brokoli';

// create a new div element with class 'container3-card-texts2'
const container3CardTexts2 = document.createElement('div');
container3CardTexts2.classList.add('container3-card-texts2');

// create a new div element with class 'gadaxasuli-dolari' and text content '$20'
const gadaxasuliDolari = document.createElement('div');
gadaxasuliDolari.classList.add('gadaxasuli-dolari');
gadaxasuliDolari.textContent = '$20';

// create a new div element with class 'dolari13' and text content '$13'
const dolari13 = document.createElement('div');
dolari13.classList.add('dolari13');
dolari13.textContent = '$13';

// append 'dolari13' element to 'gadaxasuliDolari' element
gadaxasuliDolari.appendChild(dolari13);

// create a new div element with class 'container3-stars'
const container3Stars = document.createElement('div');
container3Stars.classList.add('container3-stars');

// create five new img elements with src 'indeximgs/stars.png' and class 'stars1'
for (let i = 0; i < 5; i++) {
  const starImg = document.createElement('img');
  starImg.setAttribute('src', 'indeximgs/stars.png');
  starImg.classList.add('stars1');
  container3Stars.appendChild(starImg);
}

// append 'gadaxasuliDolari' and 'container3Stars' elements to 'container3CardTexts2'
container3CardTexts2.appendChild(gadaxasuliDolari);
container3CardTexts2.appendChild(container3Stars);

// append all elements to 'container3CardsCard'
container3CardsCard.appendChild(container3);
