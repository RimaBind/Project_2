const btn=document.getElementById("genpass");
const newPass=document.getElementById("newPass");
const slider=document.getElementById("range");
const rangeVal=document.getElementById("rangeVal");
const upperCase=document.getElementById("capLet");
const lowerCase=document.getElementById("samLet");
const number =document.getElementById("number");
const symble =document.getElementById("symbol");
const copybtn=document.getElementById("copyBtn");
rangeVal.innerText=slider.value;
slider.addEventListener('input',(e)=>{
   rangeVal.innerText=e.target.value ;
});

btn.addEventListener('click',()=>{
    let cl='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let sl='abcdefghijklmnopqrstuvwxyz';
    let num='0123456789';
    let sy='~!@#$%^&&**()_+}{';
    let fin="";
    if(upperCase.checked){
        fin+=cl;
    }
    if(lowerCase.checked){
        fin+=sl;
    }
    if(number.checked){
        fin+=num;
    }
    if(symble.checked){
        fin+=sy;
    }
    if(fin===""){
        alert("please select atleast one option");
    }
    let lp="";
    for(let i=0;i<slider.value;i++){
        let ramNum=Math.floor(Math.random()*fin.length);
        lp+=fin.charAt(ranNum);
    }
    newPass.innerText='${lp}'
});
copybtn.addEventListener("click",()=>{
    if(!newPass.innerText){
        alert("no password to copy");
        return ;
    }
    window.navigator.clipboard.writeText(newPass.innerText);
    alert("password copied");
});