let bdata = {};

((() => {
    const origOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {
        if (arguments[1].startsWith("https://api.blooket.com/api/games?gameId=")) {
            this.addEventListener('load', function() {
                bdata = JSON.parse(this.responseText);
            });   
        }
        
        origOpen.apply(this, arguments);
    };
}))();

const data = null;


let qid = ""
function get(dat,question) {
    for (let e of dat.questions) {
        if (e.question === question) {
            return e.correctAnswers[0]
        }
        
    }
}
let cor = "";
let h = ()=>{
	qid = document.querySelector("#app > div > div > div:nth-child(2) > div > div > div.styles__questionContainer___3u_c9-camelCase > div > div").innerText;
	let answer = get(bdata,qid)
	let ab = document.querySelector(".styles__answersHolder___1tefk-camelCase").children;
	alert(answer)
	
}

setInterval(()=>{
	if (document.querySelector("#app > div > div > div:nth-child(2) > div > div > div.styles__questionContainer___3u_c9-camelCase > div")) {
		h()
	}
	if (document.querySelector(".fa-check")) {
		document.querySelector(".fa-check").click()
	}
  
  if (document.querySelector(".styles__guestButton___2jiD9-camelCase")) {
    document.querySelector(".styles__guestButton___2jiD9-camelCase").click()
  }
  if (document.querySelector("#app > div > div > div:nth-child(2) > div > div > div.styles__container___1-bHf-camelCase")) {
	  document.querySelector("#app > div > div > div:nth-child(2) > div > div > div.styles__container___1-bHf-camelCase").click()
  }
},1)