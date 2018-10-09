var contactList = [
  {
    name: "João Pedro",
    photo: "02.jpg",
    bio: "Frases aleatorias a gente ve por aqui",
    lastSeen: "Today"
  },
  {
    name: "Vinicius",
    photo: "03.jpg",
    bio: "Frases aleatorias a gente ve por aqui",
    lastSeen: "Yesterday"
  },
  {
    name: "Paulo",
    photo: "04.jpg",
    bio: "Frases aleatorias a gente ve por aqui",
    lastSeen: "Tomorow"
  },
  {
    name: "Lucas",
    photo: "05.png",
    bio: "Frases aleatorias a gente ve por aqui",
    lastSeen: "Recent"
  },
  {
    name: "Marcos",
    photo: "06.jpeg",
    bio: "Frases aleatorias a gente ve por aqui",
    lastSeen: "2 min ago"
  },
  {
    name: "Guilherme",
    photo: "07.jpg",
    bio: "Frases aleatorias a gente ve por aqui",
    lastSeen: "2 min ago"
  },
  {
    name: "Pedro",
    photo: "01.jpg",
    bio: "Frases aleatorias a gente ve por aqui",
    lastSeen: "Today"
  }
];

var section = document.getElementById("contact-list");

var len = contactList.length;
for (var i = 0; i < len; i++) {
  var person  = contactList[i];
  section.innerHTML += `<div class="box-avatar"> 
  <div class="box-image">
    <img src="images/${person.photo}"/>
  </div>
  <div class="name-status">
    <h4 class="name">${person.name}</h4>
    <span class="bio">${person.bio}</span>
    <small class="status">${person.lastSeen}</small>
  </div>
</div>`;
}
