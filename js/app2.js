let preview = document.querySelector('#preview');
let input = document.querySelector('#inputText');
let allAlign = document.querySelector('.align');
allAlign.addEventListener('click',textAlign)

function getInputText(){
    preview.innerHTML=input.value;
}

function textAlign(e){
 item = e.target;
 console.log(item.classList[0]);
 if(item.classList[0] === 'align-center'){
    input.style.textAlign = "center";
    preview.style.textAlign = "center";
    console.log('center success')
 }
 if(item.classList[0] === 'align-right'){
    input.style.textAlign = "right";
    preview.style.textAlign = "rightr";
    console.log('right success')
 }
 if(item.classList[0] === 'align-left'){
    input.style.textAlign = "left";
    preview.style.textAlign = "left";
    console.log('left success');align-justify
 }
 if(item.classList[0] === 'align-justify'){
    input.style.textAlign = "justify";
    preview.style.textAlign = "justify";
    console.log('align-justify');
 }
 
}


function update() {
    var forFontFamily = document.getElementById('font-select');
    var fontFamilyOption = forFontFamily.options[forFontFamily.selectedIndex];

    var forFontSize = document.getElementById('font-size');
    var fontSizeOption = forFontSize.options[forFontSize.selectedIndex];
    var color = document.querySelector('#color');
      //console.log(color.value);

    // document.getElementById('value').value = fontFamilyOption.value;
    // document.getElementById('text').value = fontFamilyOption.text;
     // input.value = input.value.toUpperCase();

    preview.style.color = color.value;
    input.style.color = color.value;
    preview.style.fontFamily  = `${fontFamilyOption.text}`;
    input.style.fontFamily  =`${fontFamilyOption.text}`;
    preview.style.fontSize  = `${fontSizeOption.text}px`;
    input.style.fontSize  =`${fontSizeOption.text}px`;

    
}
