//Grab items

//Icons
const render = document.querySelector('.render');
const quotation = document.querySelector('.quotation');
const layout = document.querySelector('.layout');

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
});
if(layout)
layout.addEventListener('click', () => {
    layoutDropdwon.classList.add('active');
});
if(quotation)
quotation.addEventListener('click', () => {
    quotationDropdown.classList.add('active');
});

//Close content
renderCross.forEach(item => {
    item.addEventListener('click', () => {
        if (render && renderDropdown.classList.contains('active')) {

            renderDropdown.classList.remove('active');
    
        } else if (layout && layoutDropdwon.classList.contains('active')) {
            
            layoutDropdwon.classList.remove('active');
    
        } else if (quotation && quotationDropdown.classList.contains('active')) {

            quotationDropdown.classList.remove('active');

        }
    })
});