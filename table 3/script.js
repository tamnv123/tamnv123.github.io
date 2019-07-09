let products = [];
 $.ajax(
 {
  url:'https://tamnv123.github.io/table%203/value.json',
  type:'get',
 }
 ).done(function(data){
   products=data;
 })

function sumPrice() {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    sum += products[i].price * products[i].quantity;
  }
  return sum;
}

function renderContent() {
  let content = '';

  for (let i = 0; i < products.length; i++) {
    content += `<tr>
                  <td><img src="images/${products[i].img}" alt="${products[i].name}"></td>
                  <td class="_ti">${products[i].name}</td>
                  <td class="_ms">${products[i].id}</td>
                  <td class="_co">${products[i].price}</td>
                  <td class="_sl">${products[i].quantity}</td>
              </tr>`;
  }

  document.getElementById('products').innerHTML = content;
}

function sortColumn(thElement) {
  thElement = $(thElement);
  const column = thElement.attr('data-column');

  //chuyen het icon ve mac dinh 
   $('i.fa').attr('class','fa fa-sort');

  if (thElement.attr('data-order') === 'asc') {
    thElement.attr('data-order', 'desc');
    thElement.children().removeClass('fa fa-sort-desc').addClass('fa fa-sort-asc');
    sortAz(column);
  } else {
    thElement.attr('data-order', 'asc');
    thElement.children().removeClass('fa fa-sort-asc').addClass('fa fa-sort-desc');
    sortZa(column);
  }

  renderContent();
}

function sortAz(column) {
  products.sort(function (a, b) {
    let x = a[column];
    let y = b[column];

    if (typeof x == 'string') x = x.toLocaleLowerCase()
    if (typeof y == 'string') y = y.toLocaleLowerCase()

    if (x < y) return -1;
    if (x > y) return 1;

    return 0;
  })
}

function sortZa(column) {
  products.sort(function (a, b) {
    let x = a[column];
    let y = b[column];

    if (typeof x == 'string') x = x.toLocaleLowerCase()
    if (typeof y == 'string') y = y.toLocaleLowerCase()

    if (x < y) return 1;
    if (x > y) return -1;

    return 0;
  })
}

renderContent();
document.getElementById('total-price').innerText = sumPrice();