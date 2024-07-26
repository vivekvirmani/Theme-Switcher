 const inputOne = document.querySelector(".theme-container input");
 const inputTwo = document.querySelector(".theme-container-2 input");
 const themeContainer2 = document.querySelector(".theme-container-2");
 const body = document.querySelector("body");

 function classImposer(element,inputVal,storegeKey){
    if(inputVal.checked){
        element.classList.remove("light")
        element.classList.add("dark")
        localStorage.setItem(storegeKey,true)
     }else{
        element.classList.add("light")
        localStorage.setItem(storegeKey,false)
     }
 }

 const isInputOne = JSON.parse(localStorage.getItem("inputOne"));
 const isInputTwo = JSON.parse(localStorage.getItem("inputTwo"));

 if(isInputOne){
    inputOne.checked = true;
 }

 if(isInputTwo){
    inputTwo.checked = true;
 }

 function syncChecked(){

    classImposer(themeContainer2,inputTwo,"inputTwo")
 }

 changeFullDarkMode()  
 syncChecked()

 inputOne.addEventListener("input",()=>{
    changeFullDarkMode()  
 })

 function changeFullDarkMode(){
    classImposer(body,inputOne,"inputOne")
     inputTwo.checked = inputOne.checked
     syncChecked()
 }


 inputTwo.addEventListener("input",syncChecked)