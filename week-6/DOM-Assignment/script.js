const titleDiv = document.createElement('div');
document.body.append(titleDiv);

const h1 = document.createElement('h1');
titleDiv.appendChild(h1);
h1.innerHTML = 'My Favorite 10 Books';

// let titleH1 = document.createElement('h1');
// titleDiv.appendChild(titleH1);
// let textH1 = createTextNode('My Favoriete 10 Books');
// titleH1.appendChild(textH1);


const bookTitles = [
    'power-politics',
    'buddha-charitham',
    'dreams-from-my-father',
    'politics',
    'clear-city-of-the-day',
    'my-truth',
    'das-kapital',
    'devdas',
    'as-i-see',
    'the-guide'
];
// console.log(bookTitles);

// Object
const bookInformation = {
        "power-politics": {
        Title: 'Power Politics',
        Author: 'Author: Arundati Roy',
        Language:'Language: English',
        Year: 'Year: 2002'  
    },
        "buddha-charitham": {
        Title: 'Buddha Charitham',
        Author: 'Author: Ashwaghosh', 
        Language:'Language: English',
        Year: 'Year: 2017'  
    },
        "dreams-from-my-father": {
        Title: 'Dreams From My Father',
        Author: 'Author: Barack Obama',
        Language:'Language: Engish',
        Year: 'Year: 2004'  
    },
        "politics": {
        Title: 'Politics',
        Author: 'Author: Aristotle',
        Language:'Language: English',
        Year: 'Year: 1998'  
    },
        "clear-city-of-the-day": {
        Title: 'Clear City of The Day',
        Author: 'Author: Anita Desai',
        Language:'Language: English',
        Year: 'Year: 2002'  
    },
        "my-truth": {
        Title: 'My Truth',
        Author: 'Author: Indira Gandhi',
        Language:'Language: English',
        Year: 'Year: 2013'  
    },
        "das-kapital": {
        Title: 'Das Kapital',
        Author: 'Author: Karl Marx',
        Language:'Language: English',
        Year: 'Year: 2008'  
    },
        "devdas": {
        Title: 'Devdas',
        Author: 'Author: Kiran Bedi',
        Language:'Language: English',
        Year: 'Year: 1998' 
    },
        "as-i-see": {
        Title: 'As I See',
        Author: 'Author: Sarat Chandra Chatterji',
        Language:'Language: English',
        Year: 'Year: 2007'  
    },
        "the-guide": {
        Title: 'The Guide',
        Author: 'Author: R.K Naraya',
        Language:'Language: English',
        Year: 'Year: 2002'  
    }   
};
// Image list
const imgList = {
"power-politics": "https://images-na.ssl-images-amazon.com/images/I/51hAZq2bfbL._SX328_BO1,204,203,200_.jpg",
"buddha-charitham": "https://cdn.exoticindia.com/thumbnail/books/nac441sm.jpg",
"dreams-from-my-father": "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Dreams_from_my_father.jpg/200px-Dreams_from_my_father.jpg",
"politics": "https://images-eu.ssl-images-amazon.com/images/I/51Q5RsObsPL.jpg",
"clear-city-of-the-day": "https://d.gr-assets.com/books/1356453394l/275599.jpg",
"my-truth": "https://images-na.ssl-images-amazon.com/images/I/91Er-y%2BlMrL.jpg",
"das-kapital": "https://images-na.ssl-images-amazon.com/images/I/418Y3dSfpCL.jpg",
"devdas": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Devdas_%282002_Hindi_film%29.jpg/220px-Devdas_%282002_Hindi_film%29.jpg",
"as-i-see": "http://imshopping.rediff.com/imgchkbooks/200-300/books/pixs/63/9788120781863.jpg",
"the-guide": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/TheGuide.jpg/220px-TheGuide.jpg"
};


const buttonLink ={
    "power-politics": "https://www.goodreads.com/book/show/61453.Power_Politics",
    "buddha-charitham": "https://www.britannica.com/topic/Buddhacarita",
    "dreams-from-my-father": "https://en.wikipedia.org/wiki/Dreams_from_My_Father",
    "politics": "https://www.goodreads.com/book/show/19083.Politics",
    "clear-city-of-the-day": "https://www.goodreads.com/book/show/35997.Clear_Light_of_Day",
    "my-truth": "https://www.goodreads.com/book/show/290380.Indira_Gandhi",
    "das-kapital": "https://www.goodreads.com/author/list/7084.Karl_Marx",
    "devdas": "https://en.wikipedia.org/wiki/Kiran_Bedi",
    "as-i-see": "https://en.wikipedia.org/wiki/Sarat_Chandra_Chattopadhyay",
    "the-guide": "https://en.wikipedia.org/wiki/The_Guide" 
}

// Div
const mainDiv = document.createElement('div');
document.body.append(mainDiv);
 
  
    for (let i = 0; i < bookTitles.length; i++) {
      const book = bookTitles[i];

      const ul = document.createElement('ul');
      mainDiv.appendChild(ul);

      let textBookName = document.createTextNode(bookInformation[book].Title);
      let liBookName = document.createElement('h2');
      liBookName.appendChild(textBookName);
      ul.appendChild(liBookName);

      let textAuthor = document.createTextNode(bookInformation[book].Author);
      let liAuthor = document.createElement('li');
      liAuthor.appendChild(textAuthor);
      ul.appendChild(liAuthor);

      let textLanguage = document.createTextNode(bookInformation[book].Language);
      let liLanguage = document.createElement('li');
      liLanguage.appendChild(textLanguage);
      ul.appendChild(liLanguage);

      let textYear = document.createTextNode(bookInformation[book].Year);
      let liYear = document.createElement('li');
      liYear.appendChild(textYear);
      ul.appendChild(liYear);

      let img = document.createElement('img');
      ul.appendChild(img);
      img.setAttribute("src", imgList[book]);

      let button = document.createElement('button');
      ul.appendChild(button);
      let a = document.createElement('a');
      a.href = buttonLink[book];
      button.appendChild(a);
      a.text = "More Information";


    };


    const footerDiv = document.createElement('div');
    document.body.append(footerDiv);
    let container = document.getElementsByClassName('container-fluid');
    footerDiv.appendChild(container);









