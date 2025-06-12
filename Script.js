const marketInventory = [
    {
        name:"SmartWater 1.5Liter",
        price:2.99,
        category:"Grocery Non-Taxable",
        barcode:"084756391284",
        quantity: 12
    },
    {
        name:"Flaming Hot Cheetos",
        price:2.69,
        category:"Grocery Non-Taxable",
        barcode:"036000291452",
        quantity: 20
    },
    {
        name:"Ben & Jerry Milk & Cookies",
        price:7.99,
        category:"Grocery Non-Taxable",
        barcode:"012345678905",
        quantity:15
    }
    
]

function searchInventory(searchInput){
    for(let i=0; i<marketInventory.length; i++){
        let item = marketInventory[i];
        if(searchInput.toLowerCase()===item.name.toLowerCase())
        {
            console.log("Item has been found by name:", item);
            return;
        }
        if(searchInput===item.barcode){
            console.log("This item has been found by barcode:", item);
            return;
        }
    }
    console.log("Item is not found.")
};

searchInventory("flaming hot cheetos");

function addInventory(name, price, category, barcode, quantity){
    let addItem = {name, price, category, barcode, quantity};
    marketInventory.push(addItem);
    console.log(`${name} has been added.`);
    

}

addInventory("Avocado", 2.49, "Grocery Non-Taxable", "678905432189", 13 );

console.log(marketInventory);

function updateQuantity(searchInput){
    for(let i = 0; i<marketInventory.length; i++){
        let item=marketInventory[i]
        if(item.name.toLowerCase()===searchInput.toLowerCase() || item.barcode===searchInput){
            if(item.quantity>0){
                item.quantity--;
                console.log(`${item.name} has been sold. Remaining: ${item.quantity}`);
                return;
            } else { console.log("Item is out of stock!")}
        }
    }
    console.log("Item has not been found.")
}

function restockQuantity(searchInput, amount){
    for( let i = 0; i<marketInventory.length; i++){
        let item=marketInventory[i]
        if(item.name.toLowerCase()===searchInput.toLowerCase() || item.barcode === searchInput){
             if (item.quantity + amount > 20){
                item.quantity += amount;
                console.log(`Item is overstocked. Remaining: ${item.quantity}`)
                return;
            }
            else if(item.quantity>=0){
                item.quantity += amount;
                console.log(`${item.name} has been restocked. Remaining:${item.quantity}`);
                return;
            }
        } 
        }
        console.log("Item is not found.")
    }

restockQuantity("avocado",20);


function lowStock(){
    let foundLowStock = false;
    for(let i=0; i<marketInventory.length; i++){
        let item=marketInventory[i];
        if(item.quantity<5){
            console.log(`${item.name} is low on stock. Remaining:${item.quantity}`);
            foundLowStock = true;
        }
    }
    if(!foundLowStock){
        console.log("items are all stocked!");
    }
}

// lowStock();

function updateItem(searchInput, newName = null, newBarcode= null, newPrice = null, newQuantity=null){
for(let i =0; i<marketInventory.length; i++){
    let item=marketInventory[i];
    if(item.name.toLowerCase()=== searchInput.toLowerCase() || item.barcode === searchInput){
        if(newPrice!==null) item.price = newPrice;
        if (newQuantity !==null)item.quantity = newQuantity;
        if(newName !==null)item.name = newName;
        if(newBarcode !==null)item.barcode = newBarcode;
        console.log(`${item.name} price and quantity has been update!`);
        return;

    }
}
console.log("Item not found!")
}

// updateItem("flaming hot cheetos", null , 69);

// console.log(marketInventory);

function removeItem(searchInput){
    for( let i = 0; i<marketInventory.length; i++){
        let item = marketInventory[i];
        if(item.name.toLowerCase()===searchInput.toLowerCase() || item.barcode===searchInput){
            marketInventory.splice(i,1);
            console.log(`${item.name} has been removed!`);
            return;
        }
    }
    console.log(" Item is not found.");
}

// removeItem("flaming hot cheetos");
// console.log(marketInventory);

function displayInventory(){
    if(marketInventory.length === 0){
        console.log("Error, no items stored.")
        return;
    }
    for(const item of marketInventory){
        console.log(`-${item.name} | Barcode: ${item.barcode} | Price: $${item.price} | Quantity: ${item.quantity} | Category: ${item.category}`);
        
    }
}

// displayInventory()

function sortInventoryByName(searchInput){
    searchInput.sort((a,b)=>a.name.localeCompare(b.name))
}

function printInventoryByName(searchInput){
    searchInput.forEach(item => {console.log(`Name: ${item.name} | Price: $${item.price} | Quantity: ${item.quantity} | Barcode: ${item.barcode}`)})
        
    
    }



sortInventoryByName(marketInventory);
printInventoryByName(marketInventory);