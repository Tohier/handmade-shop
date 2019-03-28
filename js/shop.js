function Items(type, price, des, img) {
    this.type = type;
    this.price = price;
    this.des = des;
    this.img = img;
}

var vase = new Items(" Handmade vase", " R150", "Superb quality,available in 8 and 12.Dishwasher safe ", '<img src="images/vase-1.jpg" alt="">');

document.getElementById("shop-item1").innerHTML = vase.img;
document.getElementById("item-name").innerHTML = vase.type;
document.getElementById("item-des").innerHTML = vase.des;
document.getElementById("item-price").innerHTML = vase.price;

var necklace = new Items(" African necklace", " R50", "info here", '<img src="./images/necklace.jpg" alt=""></img>');   

document.getElementById("shop-item2").innerHTML = necklace.img;
document.getElementById("item-name2").innerHTML = necklace.type;
document.getElementById("item-des2").innerHTML = necklace.des;
document.getElementById("item-price2").innerHTML = necklace.price;

var bowl = new Items(" Glass bowl", " R350", "info here", '<img src="./images/bowl.jpg" alt="">');

document.getElementById("shop-item3").innerHTML = bowl.img;
document.getElementById("item-name3").innerHTML = bowl.type;
document.getElementById("item-des3").innerHTML = bowl.des;
document.getElementById("item-price3").innerHTML = bowl.price;

var dreamcatcher = new Items(" Dream catcher", "R75", "info here", '<img src="./images/dream.jpg" alt="">');

document.getElementById("shop-item4").innerHTML = dreamcatcher.img;
document.getElementById("item-name4").innerHTML = dreamcatcher.type;
document.getElementById("item-des4").innerHTML = dreamcatcher.des;
document.getElementById("item-price4").innerHTML = dreamcatcher.price;