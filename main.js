const toggle_menu = document.querySelector(".menu");
const dropdown_menu = document.querySelector(".dropdown_menu");
const close_button = document.getElementById('close_btn');
toggle_menu.onclick = function () {
    dropdown_menu.classList.add("open_dropdown_menu")
}
close_button.onclick = function () {
    dropdown_menu.classList.remove("open_dropdown_menu")
}

let valuedisplays=document.querySelectorAll(".numbers");
let interval=5000;

valuedisplays.forEach((valuedisplay)=>{
    let startvalue=0;
    let endvalue=parseInt(valuedisplay.getAttribute('data-val'));
    let duration=Math.floor((interval/endvalue));
    console.log(duration)
    let counter=setInterval(function(){
        startvalue+=1;
        valuedisplay.textContent=startvalue
        if(startvalue == endvalue){
            clearInterval(counter);
        }
    },duration)
})

document.addEventListener('scroll',()=>{
    const navbar=document.querySelector('.navbar');
    if(window.scrollY > 0){
      navbar.classList.add("scrollnavbar");
    }
    else{
        navbar.classList.remove("scrollnavbar");
    }
})


document.addEventListener("DOMContentLoaded", function () {
    const services = [
        {
          title: "Car Towing",
          description: "Duis laboris ball tip jowl sed. Drumstick leberkas tenderloin swine laborum cupim bacon ipsum jowl meatball t-bone.",
          image: "imgs/p.png",
        },
        {
          title: "Roadside Assistance",
          description: "Pork chop tenderloin brisket. Capicola tri-tip sausage alcatra leberkas, beef ribs rump short loin. Filet mignon t-bone doner cow.",
          image: "imgs/accident.png",
        },
        {
          title: "Vehicle Recovery",
          description: "Strip steak turkey prosciutto exercitation cillum elit. Enim ham velit aute jerky ras. Anim landjaeger andouille.",
          image: "imgs/fire.png",
        },
        {
            title: "Vehicle Recovery",
            description: "Strip steak turkey prosciutto exercitation cillum elit. Enim ham velit aute jerky ras. Anim landjaeger andouille.",
            image: "imgs/motocycle.png",
          },
          {
            title: "Vehicle Recovery",
            description: "Strip steak turkey prosciutto exercitation cillum elit. Enim ham velit aute jerky ras. Anim landjaeger andouille.",
            image: "imgs/flood.png",
          },
          {
            title: "Vehicle Recovery",
            description: "Strip steak turkey prosciutto exercitation cillum elit. Enim ham velit aute jerky ras. Anim landjaeger andouille.",
            image: "imgs/hail.png",
          },
     
      ];
      
    const serviceRow = document.getElementById("serviceRow");

    services.forEach(service => {
      const col = document.createElement("div");
      col.classList.add("col");

      const img = document.createElement("img");
      img.src = service.image;
      img.alt = "";

      const serviceContent = document.createElement("div");
      serviceContent.classList.add("service-content");

      const serviceTitle = document.createElement("div");
      serviceTitle.classList.add("service-title");
      serviceTitle.textContent = service.title;

      const serviceDesc = document.createElement("div");
      serviceDesc.classList.add("service-desc");
      serviceDesc.textContent = service.description;

      serviceContent.appendChild(img);
      serviceContent.appendChild(serviceTitle);
      serviceContent.appendChild(serviceDesc);

      col.appendChild(serviceContent);
      serviceRow.appendChild(col);
    });
  });
//for social media opening link
  function openSocialMedia(url) {
    window.location.href = url;
  }

  
