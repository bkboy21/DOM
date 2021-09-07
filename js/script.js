var menuLinks = [
  { text: 'abuto', href: '/about' },
  { text: 'catalog', href: '/catalog' },
  { text: 'orders', href: '/orders' },
  { text: 'account', href: '/account' },
];

let mainEl = document.querySelector("main");
// console.log(mainEl)


mainEl.style.backgroundColor = "var(--main-bg)";


mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

mainEl.classList = "flex-ctr";

const topMenuEl = document.querySelector("#top-menu")
// console.log(topMenuEl)

topMenuEl.style.height = "100%";

topMenuEl.style.backgroundColor = "#4e9aa7";


document.getElementsByName("topMenuEl").className = "flex-around";



// let btnt = document.querySelector("h2");

// btnt.innerHTML = "<h2>SEI Rocks!</h2>";


var btn = document.createElement("a");
// btn.document.querySelector("a");
// btn.setAttribute("n", "h");
// document.body.appendChild("topMenuEl"); 

menuLinks.forEach(function (nlink) {
	var li = document.createElement('a');
	li.textContent = nlink;
	body.appendChild(Headers);
});





