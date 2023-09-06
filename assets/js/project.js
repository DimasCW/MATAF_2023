AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "AR Logo CYBER SPARTAN",
    cardImage: "assets/images/AR-page/spartan.jpg",
    description: "Click on the image to see the project",
    tagimg: "",
   // Previewlink: "https://www.instagram.com/ar/478103523916690/",
    //Githublink: "https://www.instagram.com/ar/478103523916690/",
  },
  {
    title: "AR Logo KMTI",
    cardImage: "assets/images/AR-page/kmti.jpg",
    description: "Click on the image to see the project",
    tagimg: "",
   // Previewlink: "https://www.instagram.com/ar/478103523916690/",
    //Githublink: "https://www.instagram.com/ar/478103523916690/",
  },
  {
    title: "AR Logo MATAF TI 2023",
    cardImage: "assets/images/AR-page/mataf.jpg",
    description: "Click on the image to see the project",
    tagimg: "",
   // Previewlink: "https://www.instagram.com/ar/478103523916690/",
    //Githublink: "https://www.instagram.com/ar/478103523916690/",
  },
  {
    title: "Hologram",
    cardImage: "assets/images/AR-page/holo1.jpg",
    description: "Click on the image to see the project",
    tagimg: "",
   // Previewlink: "https://www.instagram.com/ar/478103523916690/",
    //Githublink: "https://www.instagram.com/ar/478103523916690/",
  },
  {
    title: "Hologram",
    cardImage: "assets/images/AR-page/holo2.jpg",
    description: "Click on the image to see the project",
    tagimg: "",
   // Previewlink: "https://www.instagram.com/ar/478103523916690/",
    //Githublink: "https://www.instagram.com/ar/478103523916690/",
  },
  {
    title: "Hologram",
    cardImage: "assets/images/AR-page/holo3.jpg",
    description: "Click on the image to see the project",
    tagimg: "",
   // Previewlink: "https://www.instagram.com/ar/478103523916690/",
    //Githublink: "https://www.instagram.com/ar/478103523916690/",
  },
  {
    title: "Hologram",
    cardImage: "assets/images/AR-page/holo4.jpg",
    description: "Click on the image to see the project",
    tagimg: "",
   // Previewlink: "https://www.instagram.com/ar/478103523916690/",
    //Githublink: "https://www.instagram.com/ar/478103523916690/",
  },


];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
