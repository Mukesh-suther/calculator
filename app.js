const datainput = document.getElementById("datainput")
var string = ""
const buttons = document.querySelectorAll(".buttons");
Array.from(buttons).forEach((button) => {
    button.addEventListener("click" , (e)=>{
        if(e.target.innerHTML === "="){
            string = eval(string)
            datainput.value = string
        }else if(e.target.innerHTML === "C"){
            string = ""
            datainput.value = string
        }
        else{
            datainput.value = "";
            string = string + e.target.innerHTML;
            datainput.value = string
        }
    })
});
// ary.forEach((button) => {
//     button.addeventlistner("click" , (e)=>{
//         console.log(e.target)
//     })
// });