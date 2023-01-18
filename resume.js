let shownCard = null;
const skills = ["Adaptability", "Attention to detail", "Communication", "Collaboration", "Continuous learning", "Creativity", "Critical thinking", "Emotional intelligence", "Flexibility", "Leadership", "Problem-solving", "Public speaking", "Self-motivation", "Time management"]
const tecskills = ["Java","Python","JavaScript","C","Haskel","Data Structures and Algorithms","Databases: MySql","Testing and Debugging","Version Control","Web Development","Data Management"];
const corses = ["IT Fundamentals","Internet Technology","Data Management for Data Sci","Principles of Programing Languages","Computer Architectur","Data Structures","Design and Analysis of Comp Algorithms","Software Methodology","Public Speaking","Discret Structures 1 & 2", "Calculus 1 & 2","Physics 1 & 2","Linear Algebra"];
function showCard(){
  targetCard = event.target.id;
  hideCard()
  if(targetCard == "Ed"){
    card = document.getElementById("education");
    if(!(card.isEqualNode(shownCard))){
      shownCard = card;
      hideCard(card);
      card.style.display = "inline-block";
      return
    }
    hideCard(null);
    shownCard = null;
  }
  if(targetCard == "Wk"){
    card = document.getElementById("work-experience");
    if(!(card.isEqualNode(shownCard))){
      shownCard = card;
      hideCard(card);
      card.style.display = "inline-block";
      return
    }
    hideCard(null);
    shownCard = null;
  }
  if(targetCard == "Pj"){
    card = document.getElementById("projects");
    if(!(card.isEqualNode(shownCard))){
      shownCard = card;
      hideCard(card);
      card.style.display = "grid";
      return
    }
    hideCard(null);
    shownCard = null;
  }
  if(targetCard == "Sk"){
    card = document.getElementById("skills");
    if(!(card.isEqualNode(shownCard))){
      shownCard = card;
      hideCard(card);
      card.style.display = "inline-block";
      return
    }
    hideCard(null);
    shownCard = null;
  
  }
}
function hideCard(card){
  const collection = document.getElementsByClassName("content-div");
    for(let i = 0; i < collection.length; i++){
        if(!(collection[i].isEqualNode(card))){
          collection[i].style.display = "none";
        }
    }
}
function addSkills(){
  const parent = document.getElementById("nontec-skills");
  skills.sort().forEach((skill) => {
    const newDiv = document.createElement("div")
    const para = document.createElement("p");
    newDiv.className = "traits-element";
    const text = document.createTextNode(skill);
    para.appendChild(text);
    newDiv.appendChild(para);
    parent.appendChild(newDiv);
    
  });
}
function addTecSkills(){
  const parent = document.getElementById("tec-skills");
  tecskills.forEach((skill) => {
    const newDiv = document.createElement("div")
    const para = document.createElement("p");
    newDiv.className = "traits-element";
    const text = document.createTextNode(skill);
    para.appendChild(text);
    newDiv.appendChild(para);
    parent.appendChild(newDiv);
    
  });
}
function addCourses(){
  const parent = document.getElementById("course-skills");
  corses.sort().forEach((skill) => {
    const newDiv = document.createElement("div")
    const para = document.createElement("p");
    newDiv.className = "traits-element";
    const text = document.createTextNode(skill);
    para.appendChild(text);
    newDiv.appendChild(para);
    parent.appendChild(newDiv);
    
  });
}
function addInfo(){
  addSkills();
  addTecSkills();
  addCourses();
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