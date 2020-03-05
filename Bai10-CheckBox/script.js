const checkboxes=document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;
function handleCheck(e){
    let giua=false;
    if(e.shiftKey&&this.checked){
        checkboxes.forEach(checkbox=>{
            if(checkbox===this||checkbox===lastChecked){
                giua=!giua;
            }
            if(giua){
                checkbox.checked=true
            }
        });
    }
}

checkboxes.forEach(checkbox=>checkbox.addEventListener('click',handleCheck));