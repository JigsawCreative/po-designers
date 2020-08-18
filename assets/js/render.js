//Grab items

//Icons
const render = document.querySelector('.render');
const quotation = document.querySelector('.quotation');
const layout = document.querySelector('.layout');
const backBtn = document.querySelector('.back');
const body = document.querySelector('body');
 
//Dropdown Content
const renderDropdown = document.querySelector('.render-image-wrapper');
const quotationDropdown = document.querySelector('.pdf-wrapper');
const layoutDropdwon = document.querySelector('.layout-image-wrapper');

//Content Cross
const renderCross = document.querySelectorAll('.render-cross');

//Event Listeners
if(render) //check if element exists
render.addEventListener('click', () => {
    renderDropdown.classList.add('active');
    scrollHide();
});
if(layout)
layout.addEventListener('click', () => {
    layoutDropdwon.classList.add('active');
    scrollHide();
});
if(quotation)
quotation.addEventListener('click', () => {
    quotationDropdown.classList.add('active');
    scrollHide();
});

//Close content
renderCross.forEach(item => {
    item.addEventListener('click', () => {
        if (render && renderDropdown.classList.contains('active')) {

            renderDropdown.classList.remove('active');
            backBtn.classList.remove('d-none');
            scrollBarDelay();
    
        } else if (layout && layoutDropdwon.classList.contains('active')) {
            
            layoutDropdwon.classList.remove('active');
            backBtn.classList.remove('d-none');
            scrollBarDelay();
    
        } else if (quotation && quotationDropdown.classList.contains('active')) {

            quotationDropdown.classList.remove('active');
            backBtn.classList.remove('d-none');
            scrollBarDelay();

        }
    })
});

//Remove overflow 
function scrollHide() {
    //Hide back button
    backBtn.classList.add('d-none');
    //scroll to top
    window.scroll({
        top: 100,
        left: 0,
        behavior: 'smooth'
    });
    // const main = document.querySelector('#content');
    // console.log(main);
    // main.scrollTop = 0;
    // main.scrollLeft = 0;
    //remove overflow
    body.classList.add('hidden');
}

//Delay function
function scrollBarDelay() {
    setTimeout(function() {
        body.classList.remove('hidden');
      }, 1000);
}