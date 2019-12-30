const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


// Example: Update the img src for the logo

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// Other images
// Use the IDs to update src path content

let circle = document.getElementById("cta-img");
circle.setAttribute('src', siteContent["cta"]["img-src"])


let middle = document.getElementById("middle-img");
middle.setAttribute('src', siteContent["main-content"]["middle-img"])




//1. Create selectors by using any of the DOM element's methods

//Nav


let navigation1 = document.getElementsByTagName("a")[0];

navigation1.innerText = 'Services';



let navigation2 = document.getElementsByTagName("a")[1];

navigation2.innerText = 'Product';



let navigation3 = document.getElementsByTagName("a")[2];

navigation3.innerText = 'Vision';

let navigation4 = document.getElementsByTagName("a")[3];

navigation4.innerText = 'Features';

let navigation5 = document.getElementsByTagName("a")[4];

navigation5.innerText = 'About';


let navigation6 = document.getElementsByTagName("a")[5];

navigation6.innerText = 'Contact';



//changing color of nav text to green

let navvy = document.querySelectorAll('a')

const arrayHTML = Array.from(navvy);

arrayHTML.forEach((el) => {
  el.style.color = 'green';
}

);

//  `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.

const navigationbar = document.querySelector('nav');

const newnav1 = document.createElement('a');

newnav1.textContent = 'Catalogue';

newnav1.style.color = 'green';

navigationbar.appendChild(newnav1);


const newnav2 = document.createElement('a');

newnav2.textContent = 'Welcome';

newnav2.style.color = 'green';

navigationbar.prepend(newnav2);



//button

let buttonClick = document.querySelector('button');

buttonClick.innerText = 'Get Started';

//header 

let mainHeader = document.querySelector('h1');

mainHeader.innerHTML = 'Dom <br> is <br> Awesome!';












//Main sections


let mainContent = document.querySelector('.cta-text')


let mainContent1 = document.querySelector('.cta')


let topDiv = document.querySelector('.main-content')
topDiv.style.backgroundColor = 'yellow';







