let shownCard = null;
function showContent(){
    if(shownCard != null){
        shownCard.style.display = "none";
    }
    if(event.target.id === "Ed"){
        x = document.getElementById("education");
        console.log(x.style.display);
        if (x.style.display === "none") {
            x.style.display = "inline-block";
            shownCard = x;
            transititon(x,1);
        } else{
          x.style.display = "none";
          transititon(x,-1);
        }
    }
    if(event.target.id === "Wk"){
        x = document.getElementById("work-experience");
        console.log(x.style.display);
        if (x.style.display === "none") {
            x.style.display = "inline-block";
            shownCard = x;
            transititon(x,1);
        } else{
          x.style.display = "none";
          transititon(x,-1);
        }
    }
    if(event.target.id === "Pj"){
        x = document.getElementById("projects");
        console.log(x.style.display);
        if (x.style.display === "none") {
            x.style.display = "grid";
            shownCard = x;
            transititon(x,1);
        }else{
          x.style.display = "none";
          transititon(x,-1);
        }
    }
}
function onLoad(){
    hideContent();
}

function hideContent(){
    const collection = document.getElementsByClassName("content-div");
    for(let i = 0; i < collection.length; i++){
        collection[i].style.display = "none";
    }
}
function transititon(element, direction){
  if(direction == 1){
    element.style.opacity = 0;
    setTimeout(() => {
      element.style.opacity = 1;
    }, this.animationDelay + 20); 
  }else{
    element.style.opacity = 1;
    setTimeout(() => {
      element.style.opacity = 0;
    }, this.animationDelay + 20); 
  }  
}