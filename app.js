
let input = document.querySelector('#inputText');
let word = document.querySelector('#word');
let letter = document.querySelector('#letter');
let upperBtn = document.querySelector('#upper-btn');
let lowerBtn = document.querySelector("#lower-btn");
let italicBtn = document.querySelector("#italic-btn");
let boldBtn = document.querySelector("#bold-btn");
let underlineBtn = document.querySelector("#underLine-btn");
let copyBtn = document.querySelector("#copy-btn");
let RemoveSpaceeBtn = document.querySelector("#remove-space-btn");
let preview = document.querySelector('#preview');
// var text = input.value;

upperBtn.addEventListener('click',convertUpperCase);
lowerBtn.addEventListener('click',convertLowerCase);
italicBtn.addEventListener('click',convertItalic);
boldBtn.addEventListener('click',convertBold);
underlineBtn.addEventListener('click',convertUnderine);
copyBtn.addEventListener('click',copyText);
RemoveSpaceeBtn.addEventListener('click',RemoveSpacee);

function convertUpperCase(){
      input.value = input.value.toUpperCase();
      preview.innerHTML = input.value;
      //input.style.color = 'green';
  }

  function convertLowerCase(){
    input.value  = input.value.toLowerCase();
      preview.innerHTML = input.value;
      //input.style.color = 'blue';
  } input.value

  function convertItalic(){
    input.value = `<i> ${input.value} </i>` 
      preview.innerHTML =  input.value
      //input.style.color = 'blue';
  }

  function convertBold(){
    let res = input.value.bold() ;
    input.value = res;
      preview.innerHTML =   `${input.value}`  
      //input.style.color = 'blue';
  }

  function convertUnderine(){
    input.value = `<u> ${input.value} </u>` 
      preview.innerHTML =   `${input.value}`  
      //input.style.color = 'blue';
  }

 function copyText(){
   input.select();
   navigator.clipboard.writeText(input.value);
 }

 function RemoveSpacee(){
   input.value.trim();
   preview.innerHTML = input.value;

 }
input.addEventListener('keyup',function(e){
    //console.log(e.target.value);
    wordCounter();
})

function wordCounter(){
   let getText = input.value;
   let count =0;
   let lettercount =0;
   for(let i=0;i<getText.length;i++){
    if(getText.charAt(i) == ' '){
        count++
    }  
   else if(getText.charAt(i == '')) {
        lettercount++
    }
   }
   letter.innerHTML=`letter count : ${lettercount}`;
   word.innerHTML=` word count : ${count}`;

}
//this is dummy code for checking
//let getText = text.value;
//let getText = "my name is rakhi"
//console.log(getText.split(" ").length);
// for(let i=0;i<=getText.length;i++){
//     if(getText.char)
// }