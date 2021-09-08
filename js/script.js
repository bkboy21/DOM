var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

let mainEl = document.querySelector("main");



mainEl.style.backgroundColor = "var(--main-bg)";


mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

mainEl.classList = "flex-ctr";

const topMenuEl = document.querySelector("#top-menu")
// console.log(topMenuEl)

topMenuEl.style.height = "100%";

topMenuEl.style.backgroundColor = "#4e9aa7";


document.getElementsByName("topMenuEl").className = "flex-around";

mainEl.setAttribute("class", "flex-ctr");

topMenuEl.setAttribute("class", "flex-around");
 
menuLinks.forEach(function (menuLinks) {
  var aTag = document.createElement("a");
  aTag.setAttribute("href", menuLinks.href)
  aTag.innerHTML = menuLinks.text;
  topMenuEl.appendChild(aTag);
});


// Select and cache the <nav id="sub-menu">element in a variable named subMenuEl

const subMenuEl = document.getElementById("sub-menu");


subMenuEl.style.height = "100%";

subMenuEl.style.backgroundColor = "#3da4ab";

subMenuEl.classList.add("flex-around");



const topMenuLinks = document.querySelectorAll("nav a")
console.log(topMenuLinks);


// const showingSubMenu = 



