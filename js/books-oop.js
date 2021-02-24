class book 
{
    constructor(title, author, isbn, copies)
    {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    }

    getAvailability()
    {
        if(this.copies === 0)
        {
            return 'out of stock';
        }else if(this.copies < 10)
        {
            return 'low stock';
        }
        return 'in stock';
    }

    sell(num = 1)
    {
        this.copies -= num;
    }

    restock(num = 5)
    {
        this.copies += num;
    }
}

let b1 = new book('harry-potter', 'radcliffe', 'ISB1421628', 5);

console.log(b1.getAvailability() + ' = ' +b1.copies);
b1.sell()
console.log(b1.getAvailability() + ' = ' +b1.copies);
b1.restock(10)
console.log(b1.getAvailability() + ' = ' +b1.copies);
b1.sell(14)
console.log(b1.getAvailability() + ' = ' +b1.copies);