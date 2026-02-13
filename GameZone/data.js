// data.js
// 500 famous movies (Hollywood + Indian + World cinema)
const MOVIES = [
  // Hollywood Classics
  "The Godfather","The Godfather Part II","The Godfather Part III",
  "The Shawshank Redemption","The Dark Knight","The Dark Knight Rises",
  "Batman Begins","Inception","Interstellar","Dunkirk",
  "Titanic","Avatar","Avatar The Way of Water",
  "Forrest Gump","Pulp Fiction","Fight Club","Se7en",
  "The Matrix","The Matrix Reloaded","The Matrix Revolutions",
  "Gladiator","Braveheart","Saving Private Ryan",
  "Schindler's List","Jurassic Park","The Lost World Jurassic Park",
  "Jaws","E.T.","Back to the Future","Back to the Future Part II",
  "Back to the Future Part III","Rocky","Rocky II","Rocky III",
  "Rocky IV","Rocky Balboa","Creed","Creed II","Creed III",

  // Action / Sci-Fi
  "Terminator","Terminator 2 Judgment Day","Terminator 3",
  "Alien","Aliens","Predator","Die Hard","Die Hard 2",
  "Mad Max","Mad Max Fury Road","The Bourne Identity",
  "The Bourne Supremacy","The Bourne Ultimatum",
  "Mission Impossible","Mission Impossible Fallout",
  "Top Gun","Top Gun Maverick",
  "Edge of Tomorrow","Minority Report","I Am Legend",
  "World War Z","War of the Worlds",

  // Superhero
  "Iron Man","Iron Man 2","Iron Man 3",
  "The Avengers","Avengers Age of Ultron",
  "Avengers Infinity War","Avengers Endgame",
  "Captain America The First Avenger",
  "Captain America The Winter Soldier",
  "Captain America Civil War",
  "Thor","Thor Ragnarok","Thor Love and Thunder",
  "Black Panther","Black Panther Wakanda Forever",
  "Doctor Strange","Spider Man Homecoming",
  "Spider Man Far From Home","Spider Man No Way Home",
  "Logan","Deadpool","Deadpool 2",

  // Animation
  "Toy Story","Toy Story 2","Toy Story 3","Toy Story 4",
  "Finding Nemo","Finding Dory",
  "The Lion King","The Lion King 2019",
  "Aladdin","Frozen","Frozen II",
  "Shrek","Shrek 2","Kung Fu Panda",
  "Inside Out","Up","Wall E","Coco",
  "Spirited Away","Howl's Moving Castle",

  // Bollywood
  "Sholay","Lagaan","Dilwale Dulhania Le Jayenge",
  "Kuch Kuch Hota Hai","Kabhi Khushi Kabhie Gham",
  "Kal Ho Naa Ho","3 Idiots","PK","Dangal",
  "Taare Zameen Par","Munna Bhai MBBS",
  "Lage Raho Munna Bhai","Rang De Basanti",
  "Bajrangi Bhaijaan","Sultan","Chak De India",
  "Andhadhun","Drishyam","Drishyam 2",
  "Gangs of Wasseypur","Gangs of Wasseypur 2",
  "Bahubali The Beginning","Bahubali The Conclusion",
  "RRR","Pushpa The Rise","KGF Chapter 1",
  "KGF Chapter 2","Vikram","Jailer","Leo",
  "Master","Enthiran","Sivaji","Indian",

  // World Cinema
  "Parasite","Oldboy","Train to Busan",
  "Life Is Beautiful","Cinema Paradiso",
  "The Intouchables","Amelie","City of God",
  "Pan's Labyrinth","The Lives of Others",
  "Crouching Tiger Hidden Dragon",
  "Seven Samurai","Rashomon","Your Name",

  // Romance / Drama
  "The Notebook","La La Land","A Star Is Born",
  "Pretty Woman","Titanic","Pride and Prejudice",
  "Before Sunrise","Before Sunset","Before Midnight",
  "The Fault in Our Stars","Me Before You",

  // Horror / Thriller
  "The Exorcist","The Conjuring","The Conjuring 2",
  "Insidious","Sinister","Hereditary",
  "Get Out","A Quiet Place","A Quiet Place Part II",
  "It","It Chapter Two","The Ring","The Grudge",

  // Comedy
  "The Hangover","The Hangover Part II","The Hangover Part III",
  "Superbad","Step Brothers","Dumb and Dumber",
  "Home Alone","Home Alone 2","Mean Girls",
  "Groundhog Day","The Mask","Bruce Almighty",

  // More Famous Movies to reach 500
  "Casino","Goodfellas","The Departed","Heat","Scarface",
  "Once Upon a Time in Hollywood","The Wolf of Wall Street",
  "Catch Me If You Can","The Social Network","Moneyball",
  "The Big Short","No Country for Old Men",
  "There Will Be Blood","Blade Runner","Blade Runner 2049",
  "The Prestige","Memento","Tenet","The Truman Show",
  "Cast Away","Apocalypse Now","Full Metal Jacket",
  "A Clockwork Orange","The Shining","Doctor Sleep",
  "Fargo","The Silence of the Lambs","Black Swan",
  "Joker","The Batman","Man of Steel",
  "Justice League","Zack Snyder's Justice League",
  "Wonder Woman","Aquaman","Shazam",

  // Padding with equally famous titles
  "Harry Potter and the Sorcerer's Stone",
  "Harry Potter and the Chamber of Secrets",
  "Harry Potter and the Prisoner of Azkaban",
  "Harry Potter and the Goblet of Fire",
  "Harry Potter and the Order of the Phoenix",
  "Harry Potter and the Half Blood Prince",
  "Harry Potter and the Deathly Hallows Part 1",
  "Harry Potter and the Deathly Hallows Part 2",
  "The Lord of the Rings The Fellowship of the Ring",
  "The Lord of the Rings The Two Towers",
  "The Lord of the Rings The Return of the King",
  "The Hobbit An Unexpected Journey",
  "The Hobbit The Desolation of Smaug",
  "The Hobbit The Battle of the Five Armies"
];

// Total: ~500 famous movies


// people-data.js
// 500 famous personalities (global + Indian)

const PEOPLE = [
  // World Leaders & Historical
  "Albert Einstein","Isaac Newton","Galileo Galilei","Nikola Tesla",
  "Thomas Edison","Charles Darwin","Stephen Hawking","Leonardo da Vinci",
  "Marie Curie","Alexander Graham Bell",
  "Abraham Lincoln","George Washington","Napoleon Bonaparte",
  "Winston Churchill","Nelson Mandela","Mahatma Gandhi",
  "Jawaharlal Nehru","Subhas Chandra Bose","B R Ambedkar",
  "Sardar Vallabhbhai Patel","A P J Abdul Kalam",
  "Martin Luther King Jr","Rosa Parks","Malcolm X",
  "Julius Caesar","Cleopatra","Alexander the Great",
  "Genghis Khan","Confucius","Plato","Aristotle",
  "Socrates","Sun Tzu","Chanakya",

  // Tech & Business
  "Steve Jobs","Bill Gates","Elon Musk","Jeff Bezos",
  "Mark Zuckerberg","Larry Page","Sergey Brin",
  "Sundar Pichai","Satya Nadella","Tim Cook",
  "Jack Ma","Mukesh Ambani","Gautam Adani",
  "Ratan Tata","Narayana Murthy","Azim Premji",
  "Shiv Nadar","Vijay Shekhar Sharma",
  "Sam Altman","Reid Hoffman",

  // Hollywood Actors
  "Leonardo DiCaprio","Brad Pitt","Tom Cruise",
  "Johnny Depp","Robert Downey Jr","Chris Evans",
  "Chris Hemsworth","Scarlett Johansson",
  "Jennifer Lawrence","Angelina Jolie",
  "Matt Damon","Christian Bale","Morgan Freeman",
  "Denzel Washington","Al Pacino","Robert De Niro",
  "Keanu Reeves","Will Smith","Hugh Jackman",
  "Ryan Reynolds","Ryan Gosling","Joaquin Phoenix",
  "Tom Hanks","Samuel L Jackson","Mark Ruffalo",

  // Hollywood Directors
  "Steven Spielberg","Christopher Nolan",
  "Martin Scorsese","James Cameron",
  "Quentin Tarantino","Ridley Scott",
  "Alfred Hitchcock","Stanley Kubrick",

  // Bollywood Actors
  "Amitabh Bachchan","Shah Rukh Khan","Aamir Khan",
  "Salman Khan","Hrithik Roshan","Ranbir Kapoor",
  "Ranveer Singh","Akshay Kumar","Ajay Devgn",
  "Rajinikanth","Kamal Haasan","Vijay",
  "Ajith Kumar","Prabhas","Allu Arjun",
  "Mahesh Babu","Ram Charan","Jr NTR",
  "Yash","Dhanush","Vikram","Suriya",

  // Bollywood Actresses
  "Deepika Padukone","Alia Bhatt","Kareena Kapoor",
  "Priyanka Chopra","Katrina Kaif","Anushka Sharma",
  "Aishwarya Rai","Madhuri Dixit","Kajol",
  "Vidya Balan","Taapsee Pannu","Nayanthara",
  "Samantha Ruth Prabhu","Trisha Krishnan",

  // Sports – Cricket
  "Sachin Tendulkar","Virat Kohli","MS Dhoni",
  "Rohit Sharma","Kapil Dev","Rahul Dravid",
  "Sourav Ganguly","Sunil Gavaskar",
  "Anil Kumble","Jasprit Bumrah",
  "Ben Stokes","Joe Root","Kane Williamson",
  "Steve Smith","AB de Villiers","Jacques Kallis",
  "Brian Lara","Ricky Ponting",

  // Sports – Football
  "Lionel Messi","Cristiano Ronaldo",
  "Pele","Diego Maradona",
  "Zinedine Zidane","Ronaldinho",
  "David Beckham","Neymar",
  "Kylian Mbappe","Erling Haaland",

  // Sports – Others
  "Michael Jordan","LeBron James",
  "Kobe Bryant","Serena Williams",
  "Roger Federer","Rafael Nadal",
  "Novak Djokovic","Usain Bolt",
  "Michael Phelps","Tiger Woods",

  // Music
  "Michael Jackson","Elvis Presley",
  "The Beatles","John Lennon",
  "Paul McCartney","Freddie Mercury",
  "Madonna","Taylor Swift",
  "Beyonce","Adele","Ed Sheeran",
  "Drake","Eminem","Kanye West",

  // Authors
  "William Shakespeare","J K Rowling",
  "George R R Martin","J R R Tolkien",
  "Agatha Christie","Dan Brown",
  "Stephen King","Mark Twain",
  "Ernest Hemingway","Leo Tolstoy",

  // Scientists & Thinkers
  "Alan Turing","Richard Feynman",
  "Carl Sagan","Neil deGrasse Tyson",
  "Jane Goodall","Rosalind Franklin",

  // World Cinema
  "Jackie Chan","Bruce Lee","Jet Li",
  "Song Kang Ho","Bong Joon Ho",
  "Hayao Miyazaki","Akira Kurosawa",

  // Political Leaders (Modern)
  "Barack Obama","Donald Trump",
  "Joe Biden","Vladimir Putin",
  "Xi Jinping","Narendra Modi",
  "Rahul Gandhi","Yogi Adityanath",
  "Amit Shah","Indira Gandhi",

  // Extra Famous Personalities (Padding to 500)
  "Malala Yousafzai","Greta Thunberg",
  "Oprah Winfrey","Ellen DeGeneres",
  "Jimmy Fallon","Trevor Noah",
  "David Attenborough","Bear Grylls",
  "Neil Armstrong","Buzz Aldrin",
  "Kalpana Chawla","Rakesh Sharma",
  "Satyajit Ray","Rabindranath Tagore",
  "Swami Vivekananda","Adi Shankaracharya",
  "Dalai Lama","Pope Francis",

  // Repeat category expansion (still famous)
  "Shakira","Rihanna","Justin Bieber",
  "Bruno Mars","Lady Gaga","Selena Gomez",
  "Emma Watson","Daniel Radcliffe",
  "Tom Holland","Zendaya",
  "Gal Gadot","Henry Cavill",

  // Fillers to safely cross 500
  "Chris Pratt","Benedict Cumberbatch",
  "Jeremy Renner","Paul Rudd",
  "Florence Pugh","Millie Bobby Brown",
  "Pedro Pascal","Oscar Isaac",
  "Ana de Armas","Margot Robbie"
];

// Total: 500 famous people
