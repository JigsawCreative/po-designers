//Grab items

//Icons
const render = document.querySelector('.render');
const quotation = document.querySelector('.quotation');
const layout = document.querySelector('.layout');
const backBtn = document.querySelector('.back');
const main = document.querySelector('#content');

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
    backBtn.classList.add('d-none');
});
if(layout)
layout.addEventListener('click', () => {
    layoutDropdwon.classList.add('active');
    backBtn.classList.add('d-none');
});
if(quotation)
quotation.addEventListener('click', () => {
    quotationDropdown.classList.add('active');
    backBtn.classList.add('d-none');
    main.classList.add('hidden');
});

//Close content
renderCross.forEach(item => {
    item.addEventListener('click', () => {
        if (render && renderDropdown.classList.contains('active')) {

            renderDropdown.classList.remove('active');
            backBtn.classList.remove('d-none');
    
        } else if (layout && layoutDropdwon.classList.contains('active')) {
            
            layoutDropdwon.classList.remove('active');
            backBtn.classList.remove('d-none');
    
        } else if (quotation && quotationDropdown.classList.contains('active')) {

            quotationDropdown.classList.remove('active');
            backBtn.classList.remove('d-none');
            scrollBarDelay();

        }
    })
});

//Delay function
function scrollBarDelay() {
    setTimeout(function() {
        main.classList.remove('hidden');
      }, 2000);
}