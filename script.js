const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open'); //toggle the class on and off
}
function toggleActive(e) {
    console.log(e.propertyName); //will return the name to events that had transition/changes
    //since there are multiple transitions end event  being fired we only care about flex-grow so if is used
    if (e.propertyName.includes('flex')) {  //not writing e.propertyName == 'flex' as some browser has flex and some has flex-grow
    this.classList.toggle('open-active');
    
    }
}

panels.forEach(panel => panel.addEventListener('click',toggleOpen)); //not toggleOpen() cause we are just giving refernce to the function, it would run on page load is with paranthesis
panels.forEach(panel => panel.addEventListener('transitionend',toggleActive));