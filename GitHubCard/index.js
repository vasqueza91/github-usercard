import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios
.get('https://api.github.com/users/vasqueza91')
.then(res => {
  console.log(res);
})
.catch(err => {
  console.log(err);
})

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

followersArray.forEach(user => {
  axios.get(`https://api.github.com/users/${user}`)
  .then((res) => {
    const users = res.data;
    document.querySelector('.cards').append(gitHubCardMaker(users));
    console.log(res.data)
  })
  .catch(err => {
    console.log(err)
  })
})

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function gitHubCardMaker({avatar_url, html_url, name, bio, login, location, followers, following, href }){
  const gitHubCard = document.createElement('div');
  const images = document.createElement('img');
  const cardInfo = document.createElement('div');
  const names = document.createElement('h3');
  const userName = document.createElement('p');
  const locations = document.createElement('p');
  const profile = document.createElement('p');
  const links = document.createElement('a');
  const followers1 = document.createElement('p');
  const following1 = document.createElement('p');
  const bioPara = document.createElement('p');

  links.href = href

  gitHubCard.appendChild(images);
  gitHubCard.appendChild(cardInfo);
  cardInfo.appendChild(names);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(locations);
  cardInfo.appendChild(profile);
  profile.appendChild(links);
  cardInfo.appendChild(followers1);
  cardInfo.appendChild(following1);
  cardInfo.appendChild(bioPara);

  gitHubCard.classList.add('card');
  cardInfo.classList.add('card-info');
  names.classList.add('name');
  userName.classList.add('username');

  images.src = avatar_url;
  names.textContent = `Name: ${name}`;
  userName.textContent = `Profile: ${login}`;
  locations.textContent = `Location: ${location}`;
  links.textContent = html_url;
  followers1.textContent = `Following: ${followers}`;
  following1.textContent = `Followers: ${following}`;
  bioPara.textContent = `Bio: ${bio}`;

  return gitHubCard;

}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
