document.addEventListener("click", function(e){
  if(e.target.classList.contains("button")) {
		var chosenBtn = e.target.textContent;
		ChoosenBtnAct(chosenBtn);
	}
});

function ChoosenBtnAct(btn) {
  if(btn == "Check all") {
     browser.tabs.executeScript({
      file: "checkallscript.js"
    });

  } else if(btn == "Unceck all"){
    browser.tabs.executeScript({
     file: "uncheckallscript.js"
   });
  }
}
