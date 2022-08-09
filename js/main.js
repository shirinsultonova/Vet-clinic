

var elOpenModalBtn = document.querySelector(".down__link");
var elModal = document.querySelector(".modal");
var elCloseModalBtn = document.querySelector(".modal-close");


elOpenModalBtn.addEventListener("click", function(){
    elModal.classList.add("modal-open");
});

elCloseModalBtn.addEventListener("click", function(){
    elModal.remove("modal-open");
})