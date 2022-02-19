const tvShows = [
  'Lost',
  'Stranger Things',
  'Breaking Bad',
  'Game of Thrones',
  '24',
  'The Office',
  'Community',
  'Parks and Rec.',
  'Power',
  'BoJack Horseman',
  'The Witcher',
  'Homeland',
  'Disenchantment',
  'Euphoria',
  'Degrassi',
  'Drake and Josh',
  'The Walking Dead',
  'Adventure Time',
  'Futurama',
  'Family Guy',
  'South Park',
  'Malcolm in the Middle',
  'Simpsons',
  'Keeping Up With the Kardashian',
  'SpongeBob'
];

console.log(tvShows);

let content = '';

for (let i = 0; i <= tvShows.length - 1; i++) {

  // content = content + `${content}<li><a href="">${tvShows}</a></li>`;
  content +=`<li><a href="">${tvShows[i]}</a></li>`;
  
  console.log(tvShows[i]);
}

document.querySelector('.link').innerHTML = `<ul>${content}</ul>`;
