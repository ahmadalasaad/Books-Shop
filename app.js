'usestrict';
let btn=document.getElementById('submit');
let nameFeild=document.getElementById('name');
let priceFeild=document.getElementById('price');
let table=document.getElementById('bookTable');
///headerTable
let firstRaw=document.createElement('tr');
table.appendChild(firstRaw);
let nameTh=document.createElement('th');
firstRaw.appendChild(nameTh);
nameTh.textContent='Book Name';
let pagesTh=document.createElement('th');
firstRaw.appendChild(pagesTh);
pagesTh.textContent='Book Page';
let priceTh=document.createElement('th');
firstRaw.appendChild(priceTh);
priceTh.textContent='Price';
//
function Book(name,price){
    this.name=name;
    this.price=price;
    this.pages=Math.floor((Math.random()*501)+1);
    Book.all.push(this);
}
Book.all=[];
btn.addEventListener('click',handler);
function handler(event){
event.preventDefault();
let newName=nameFeild.value;
let newPrice=parseInt(priceFeild.value);
new Book(newName,newPrice);
saveLocal();
table.textContent='';
table.appendChild(firstRaw);
Book.prototype.render();
}
Book.prototype.render=function(){
    let total=0;
    for (let i = 0; i < Book.all.length; i++) {
        let bookRaw=document.createElement('tr');
        table.appendChild(bookRaw);
        let nameTd=document.createElement('td');
        nameTd.textContent=Book.all[i].name;
        bookRaw.appendChild(nameTd);
        let pagesTd=document.createElement('td');
        pagesTd.textContent=Book.all[i].pages;
        bookRaw.appendChild(pagesTd);
        let priceTd=document.createElement('td');
        priceTd.textContent=Book.all[i].price;
        bookRaw.appendChild(priceTd);
        total+=Book.all[i].price;
    }
    let totalRaw=document.createElement('tr');
    totalRaw.textContent=`Total : ${total}`;
    table.appendChild(totalRaw);
}

function saveLocal(){
    let convAll=JSON.stringify(Book.all);
    localStorage.setItem('book',convAll);
}
function getLocal(){
    let data=localStorage.getItem('book');
    let parseData=JSON.parse(data);
    if(parseData){
        for (let i = 0; i < parseData.length; i++) {
            Book.all.push(parseData[i]);
            
        }
    }
}

getLocal();
Book.prototype.render();