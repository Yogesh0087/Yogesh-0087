import { Order } from './order.model';

import { Injectable } from "@angular/core";
import { Observable,from} from 'rxjs';
import { Product } from './product.model';





@Injectable()

export class StaticDataSource {

    private products : Product[] = [

        
        new Product(1,"Rock ", "Dog Food", "Farmina N&D Dry Dog Food Grain Free Pumpkin Lamb & Blueberry Puppy Mini Breed- 800 gm",100),
        new Product(2,"Dry Food ", "Dog Food", "Fidele Starter Puppy Food - 15 kg",7100),
        new Product(3,"Starter Puppy ", "Dog Food", "Farmina N&D Dry Dog Food Chicken & Pomegranate Starter Puppy - 12 kg",100),
        new Product(4,"Canin ", "Dog Food", "Royal Canin Maxi Starter - 4 Kg",100),
        new Product(5,"Codfish ", "Dog Food", "Wet Dog Food Ocean Codfish & Pumpkin Mini Adult - 140 gm (Pack Of 6)",100),
        new Product(6,"Blueberry ", "Dog Food", " Grain Free Grain Free Pumpkin Lamb & Blueberry Starter - 285 gm (6 Cans)",100),
        new Product(7,"Dry ", "Dog Food", " Puppy Mini Breed- 800 gm",100),
        new Product(8,"Foody ", "Dog Food", "Fueberry Puppy Mini Breed- 800 gm",100),


        new Product(8,"Brock ", "Adopt Dog", "Friendly Dog",0),
        new Product(8,"Khabib ", "Adopt Dog", "Calm Dog",0),
        new Product(8,"Mowgli ", "Adopt Dog", "Wild Dog",0),
        new Product(8,"Doggo ", "Adopt Dog", "Good to have him around",0),
        new Product(8,"Moody ", "Adopt Dog", "Playful",0),
        new Product(8,"Zlatan ", "Adopt Dog", "williandeborges",0),
        new Product(8,"Rooney ", "Adopt Dog", "arrizabalaka",0),
        new Product(8,"Ronaldo ", "Adopt Dog", "kepa",0),

        new Product(8,"Mini-Toy ", "Dog Toys", "PETSPORT Tug Max Dog Toy - Mini",4500),


        

       

    ];

    getProducts() : Observable<Product[]>
    {
        return from([this.products]);
    }


    saveOrder(Order : Order) : Observable<Order>
    {
        console.log(JSON.stringify(Order));

        return from ([Order]);
    }
}