
import { Product } from './../../Model/product.model';
import { Injectable } from "@angular/core";




// Why am i using services???
@Injectable()

export class Cart
{
    // Attributes 
    public Lines : CartLine[] =[] ;
    public itemcount : number =0 ;
    public cartPrice : number = 0 ;
    


    //Methods
    // Add product to cart

    addLine(product : Product,quantity : number = 1 )
    {
        let line =this.Lines.find(line => line.product.id == product.id)
        if(line != undefined)
        {
            line.quantity = line.quantity + quantity;
        }
        else
        {
            this.Lines.push(new CartLine(product,quantity));
        }

        this.recalculate();

        //recalculation baki ayhe
    }
    

    // Update product to cart 
    updateQuantity( product: Product,quantity : number)
    {
        let line = this.Lines.find(line => line.product.id == product.id)
        if(line != undefined)
        {
            line.quantity = Number(quantity);

        }
        this.recalculate();
        //recalculation() baki a;

    }

    // Remove from car
removeLine(id : number)
{
    let index = this.Lines.findIndex ( line => line.product.id == id);
    this.Lines.splice(index,1);

    this.recalculate();
    //Recalculate total

}
//clear method to delete all
clear()
{
    this.Lines = [];
    this.itemcount = 0;
    this.cartPrice = 0;
}
//Recalc method

private recalculate()
{
    this.itemcount = 0;
    this. cartPrice = 0;
    this.Lines.forEach(l =>
    {
        this.itemcount += l.quantity;
        this.cartPrice += (l.quantity *  l.product.price)

    })

}
}

//CCRUD
export class CartLine
{
    constructor(public product : Product ,public quantity : number )
    {

    }

    get lineTotal()
    {
        return this.quantity * this.product.price ;
    }

}
//CRUD
