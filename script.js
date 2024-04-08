const openForm = document.querySelector(".sign-up");
const closeForm = document.querySelector(".fa-times");
openForm.addEventListener("click",()=>{
    document.querySelector(".main-container").style.display ="flex";
})
closeForm.addEventListener("click",()=>{
    document.querySelector(".main-container").style.display ="none";
})

