let nad = true
let nad2 = true
let origST = setTimeout;

setInterval(()=>{
    if (document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase.styles__body___12LVw-camelCase > div.styles__terminal___-b2QX-camelCase > div.styles__buttonContainer___3yX9w-camelCase") && nad) {
        document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase.styles__body___12LVw-camelCase > div.styles__terminal___-b2QX-camelCase > div.styles__buttonContainer___3yX9w-camelCase").firstChild.click()
        nad = false
    }
  
},1)

setInterval(()=>{
    if (document.querySelector("#header > div.styles__headerRight___D5pQ1-camelCase > div > i")) {
        setTimeout = (f,t)=>{f()}
    }
    }, 1)

let bdata = {};
let times = 0;
              


    const origOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {
        if (arguments[1].startsWith("https://api.blooket.com/api/games?gameId=")) {
            this.addEventListener('load', function() {
                bdata = JSON.parse(this.responseText);
            });   
        }
        
        origOpen.apply(this, arguments);
    };


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

setInterval(()=>{
  if (document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase > div.styles__pageButton___3uI22-camelCase")) {
    document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase > div.styles__pageButton___3uI22-camelCase").click()
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
	if (document.querySelector("#app > div > div > div:nth-child(2) > div > div.styles__powerUpIconContainer___3rksC-camelCase")) {
	    origST(()=>{
		  document.querySelector("#app > div > div > div:nth-child(2) > div > div.styles__powerUpIconContainer___3rksC-camelCase").click()
	    },1000)
	    
	}
	
},1)

setInterval(()=>{
	if (document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase > div.styles__answersHolder___3LYNs-camelCase")) {
		Array.from(document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase > div.styles__answersHolder___3LYNs-camelCase").children).forEach(p=>{let ans = get(bdata,document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase > div.styles__questionContainer___3u_c9-camelCase > div > div").innerText); if (p.innerText === ans) {p.firstChild.click()}})
	}
	if (document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase.styles__body___12LVw-camelCase > div.styles__feedbackContainer___7PzgR-camelCase > div.styles__choice___1aMOz-camelCase.styles__choice2___3mKbD-camelCase")) {
		document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase.styles__body___12LVw-camelCase > div.styles__feedbackContainer___7PzgR-camelCase > div.styles__choice___1aMOz-camelCase.styles__choice2___3mKbD-camelCase").click()
	}
},1)

setInterval(()=>{
  if (document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase > div.styles__buttonRow___Qu1Ro-camelCase > div:nth-child(1) > div > div.styles__center___RkEYP-camelCase")) {
    document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase > div.styles__buttonRow___Qu1Ro-camelCase > div:nth-child(1) > div > div.styles__center___RkEYP-camelCase").click()
  }

  if (document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase > div:nth-child(4) > div:nth-child(2)")) {
    document.querySelector("#app > div > div > div.arts__regularBody___1TM6E-camelCase > div:nth-child(4) > div:nth-child(2)").click() 
  }
})

// document.querySelector("#app > div > div > div.styles__questionContainer___1u3eL-camelCase > div > div.styles__questionContainer___3u_c9-camelCase > div > div")
