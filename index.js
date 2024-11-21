//task1
class Book{
        title;
        author;
        ibsn;

        constructor(title, author, ibsn){
            this.title = title;
            this.author = author;
            this.ibsn = ibsn;
        }

        checkout(){
            console.log(this.title,"Book has taken from library");
        }

        returnbook(){
            console.log(this.title,"Book has returned to library.")
        }

        updateTitle(newUpdatedtitle){
            this.title = newUpdatedtitle;
            console.log("The book title has updated.")
        }
}

var b1 = new Book('Harry_Potter','JK Rowling',100);
console.log(b1);
b1.checkout();
b1.returnbook();
b1.updateTitle("harry");
b1.checkout();

// Task2
class Product{
    name;
    price;
    category;

    constructor(name, price, category){
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(amt){
        console.log("Applied 10% discount on the orignal Amount",this.price);
    }

    getPriceAfterDiscount(amt){
        console.log("The price of the chicken after the discount is ", this.price - amt);
    }
}

var p1 = new Product('Chicken',220,'Non-veg');
console.log(p1);
p1.applyDiscount(220/10);
p1.getPriceAfterDiscount(220/10);

// Task3
class BankAccount{
    accountholdername;
    accountnumber;
    balance;

    constructor(accountholdername,accountnumber,balance){
        this.accountholdername = accountholdername;
        this.accountnumber = accountnumber;
        this.balance = balance;
    }

    Deposit(amt){
        console.log("The Balance in the",this.accountholdername,"account is",this.balance);
        console.log(amt,"has been deposited into",this.accountholdername,"Account");
        this.balance = this.balance + amt;
        console.log("Now the current Balance is ", this.balance);
    }

    Withdraw(amt){
        console.log("The Balance in the",this.accountholdername,"account is",this.balance);
        this.balance = this.balance - amt;
        console.log("Now the current balance after withdrawal is ",this.balance);
    }

    getBalance(){
        console.log("The final Balance in ",this.accountholdername,"account is", this.balance);
    }
}

var b1 = new BankAccount("Krishna", 24789, 1000)
console.log(b1);
b1.Deposit(200);
b1.Withdraw(300);


// Task4
class vehicle{
    model;
    License_plate;
    mileage;

    constructor(model,License_plate, mileage){
        this.model = model;
        this.License_plate = License_plate;
        this.mileage = mileage;
    }

    drive(miles){
        console.log("The car mileage has increased by ",miles,"km/ltr.");
        this.mileage = this.mileage+miles;
    }

    getmileage(miles){
        console.log("The current mileage of this",this.model," is ",this.mileage,"km/ltr.");
    }

}

var c1 = new vehicle("Bmw", "ts061478", 25);
console.log(c1);
c1.drive(5);
c1.getmileage();


// Task5
class Student{
    name;
    grade;

    constructor(name, grade){
        this.name = name;
        this.grade = grade;
    }

    setGrade(newgrade){
        this.grade = newgrade;
    }

    getGrade(){
        console.log("Krishna got",this.grade,"in Physics subject.")
    }
}

var s1 = new Student('Krishna','B');
s1.getGrade();
s1.setGrade('A');
s1.getGrade();
