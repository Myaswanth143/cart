let carts = document.querySelector(".carts");
const btncls = document.querySelector(".btncls");
const cards = document.querySelector(".cards");
let totalval = document.querySelector(".total-price");
let countCls = document.getElementById("count");
let index = 3;
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((res) => {
    cards.innerHTML = res
      .map((item, index) => {
        return `<div class=product-${index}><img src=${
          item.image
        } width="50px" height="80px"/>
    <p>${item.id}<p>
    <h4>${item.category}</h4>
    <p>${item.price}</p>
    <button onclick=addCart(${index},${item.price.toFixed()})> Add Item</button>

    </div>`;
      })
      .join("");
  });
let sum = 0;
let count = 0;
let addCart = function (index, price) {
  sum += price;
  count += 1;
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((res) => {
      const newEle = document.createElement("div");
      newEle.innerHTML += `<div class=product-${index}>
          <img src=${res[index].image} width="50px" height="80px"/>
          <h4>${res[index].category}</h4>
        <p>${res[index].price}</p><button onclick=delbtn(this,${price})>DELETE</button>
        </div>`;
      carts.append(newEle);
      indexVal = index;
    });
  totalval.innerHTML = sum;
  countCls.innerHTML = count;
};

delbtn = function (e, val) {
  e.closest("div").remove();
  console.log(val);
  sum = sum - val;
  count = count - 1;
  totalval.innerHTML = sum;
  countCls.innerHTML = count;
};
