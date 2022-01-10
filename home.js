const productcontainers = [...document.querySelectorAll('.product-container')];
const prebtn = [...document.querySelectorAll('.pre-btn')];
const nxtbtn = [...document.querySelectorAll('.nxt-btn')];

productcontainers.forEach((item, i) => {
    let containerDimensions = item.getBoundClientRect();
    let containerWidth = containerDimensions.width;


    nxtBtn[i].addEventListener('click', () => {
        item.scrollleft +=containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollleft +=containerWidth;
    })

})