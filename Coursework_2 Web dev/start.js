const myForm = document.getElementById("myForm");
const popUpBtn = document.getElementById("popUp");
const closeBtn = document.getElementById("close-btn");

//openForm is used to make visible the feedback form for the contact us page by using display:block.
function openForm() {
  myForm.style.display = "block";
}

//closeForm is used to close the form by making the form invisible using the diplay: none property.
function closeForm() {
  myForm.style.display = "none";
}

//The following is used to respond when the 'send a massage' button is clicked and calls the open form function to dispaly the form.
popUpBtn.addEventListener("click", openForm);

// This is used to close the form by calling the closeform function which changes display to none.
closeBtn.addEventListener("click", closeForm);
