//title
//author
//isbn
//numCopies

//getAvailability b < 0 'out of stock'
//b < 10 'low stock' else 'instock'
//sell(b) num-books sold
//restock (b) num-books add to total books

function book(title, author, isbn, numOfCopies)
{
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.numOfCopies = numOfCopies;   
}

book.prototype.getAvailability = function() 
{
    if(this.numOfCopies === 0)
    {
        return 'out of stock';
    }else if(this.numOfCopies < 10)
    {
        return 'low stock';            
    }
    return 'in stock';
}

book.prototype.sell = function(num = 1)
{
    this.numOfCopies -= num;
}

book.prototype.restock = function(num = 5)
{
    this.numOfCopies += num;
}

let x = new book('book-1', 'conrad', '121213', 10);

console.log(x.numOfCopies);
x.sell(4);
console.log(x.numOfCopies);
console.log(x.getAvailability());
x.restock(15);
console.log(x.getAvailability());
x.sell(15)
console.log(x.getAvailability());
x.sell(5);
console.log(x.numOfCopies);