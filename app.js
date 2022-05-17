function priceChange() {
    const price = document.getElementById("price-change");
    const month1 = document.querySelector('.price1-monthly');
    const annually1 = document.querySelector(".price1-annually");
    const month2 = document.querySelector('.price2-monthly');
    const annually2 = document.querySelector(".price2-annually");
    const month3 = document.querySelector('.price3-monthly');
    const annually3 = document.querySelector(".price3-annually");
   

    price.addEventListener('change', ()=>{
        month1.classList.toggle('hide');
        annually1.classList.toggle('show');
        month2.classList.toggle('hide');
        annually2.classList.toggle('show');
        month3.classList.toggle('hide');
        annually3.classList.toggle('show');
    });
}
priceChange()