let theme = localStorage.getItem('theme')
if(theme == null){
    setTheme('light')
} else {
    setTheme(theme)
}

let themeDots = document.getElementsByClassName("theme-dot")

for(var i=0; themeDots.length>i;i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        setTheme(mode)
    })
}

function setTheme(mode){
    if(mode == 'light'){
        document.getElementById('theme-style').href = 'default.css'
    } else if(mode == 'blue'){
        document.getElementById('theme-style').href = 'blue.css'
    } else if(mode == 'green'){
        document.getElementById('theme-style').href = 'green.css'
    } else if(mode == 'purple'){
        document.getElementById('theme-style').href = 'purple.css'
    }
    localStorage.setItem('theme', mode)
}

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction(500)};

function scrollFunction(scrollSize) {
  if (document.body.scrollTop > scrollSize || document.documentElement.scrollTop > scrollSize) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    // window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0)
    // document.body.scrollTop = 0;
    console.log("scrolling")
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}