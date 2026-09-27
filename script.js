console.log("js running");
const frstinput=document.getElementById("frstinput");
const secinput=document.getElementById("secinput");
const find=document.getElementById("find");

find.addEventListener("click",()=>{

    const a=Number(frstinput.value);
    const b=Number(secinput.value);
    console.log(a);
    if(a=="" || isNaN(a)){ // or operoter
        // agr a ki value khali h ya a ki value Number(int) mein
        //  nhi h to if ki body k andar ka code chalao.
        alert("Please enter a valid number");
        return;
    }
    const pofone=1000/a;
    console.log(pofone);

    const total=pofone*b;
    console.log(total+"g");
    const result=document.getElementById("result");

    if(total>1000){
        result.textContent=total/1000+"kg";
    } else {
        result.textContent=total+"g";
    }
});