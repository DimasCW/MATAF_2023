AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage: "assets/images/sponsor-page/jagoan-lanyard.png",
    langName: "JAGOAN LANYARD",
    langDesc: "<li>Jagoan Lanyard merupakan mitra terpercaya dalam menyediakan lanyard yang mengedepankan kualitas, Didukung SDM yang berkompeten dan mesin digital printing yang modern mampu menghasilkan produk cetak lanyard custom berkualitas.</li>",
  },
  
];

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
