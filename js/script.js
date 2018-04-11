'use strict';

var productInfo = document.querySelectorAll(".product-info");
var productLink = document.querySelectorAll(".products__link");

for (var i = 0; i < productInfo.length; i++) {
    productInfo[i].addEventListener("click", function() {
        if (this.classList.contains("product-info--disabled")) {
            return;
        }
        if (!this.classList.contains("product-info--selected")) {
            this.classList.add("product-info--selected");
        } else {
            this.classList.remove("product-info--selected");
            this.classList.remove("product-info--selected-hover");
        }
    });

    productLink[i].addEventListener("click", function(evt) {
        evt.preventDefault();
        if (productInfo[i].classList.contains("product-info--disabled")) {
            return;
        }
        if (!productInfo[i].classList.contains("product-info--selected")) {
            productInfo[i].classList.add("product-info--selected");
        }
    });
}
