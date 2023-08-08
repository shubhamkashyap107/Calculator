let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");


for(let btn of buttons)
{
    btn.addEventListener("click",(e) => {
        if(e.target.innerText == "C")
        {
            input.value = "";
        }
        else if(e.target.innerText == "=")
        {
            try{
                input.value = eval(input.value);
            }
            catch{
                input.value = "Invalid"
            }
            
        }
        else
        {
            input.value += e.target.innerText;
        }
    });
}