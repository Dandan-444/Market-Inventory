// ==============
// Inventory Data
// ==============

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
        barcode:"712345678905",
        quantity:15
    }
    
]

// =================
// Search Function
// =================
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




// =================
// Add Function
// =================

function addInventory(name, price, category, barcode, quantity){
    for(let i = 0; i<marketInventory.length;i++){
        let item = marketInventory[i];
        if(item.name.toLowerCase()===name.toLowerCase()){
            console.log(`${item.name} cannot be added. Duplicate.`)
            return;
        }
        if(item.barcode===barcode){
            console.log(`${item.barcode} cannot be added. Duplicate.`)
            return;
        }
    }
    let addItem = {name, price, category, barcode, quantity};
    marketInventory.push(addItem);
    console.log(`${name} has been added.`);
}


// ===================
// Sell Item function
// ===================


function sellItem(searchInput){
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


// =================
// Restock Function
// =================

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




// =================
// Low Stock Function
// =================
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

// =====================
// Update Item Function
// =====================

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


// =================
// Remove Function
// =================

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


// ==========================
// Display Inventory Function
// ==========================


function displayInventory(){
    if(marketInventory.length === 0){
        console.log("Error, no items stored.")
        return;
    }
    for(const item of marketInventory){
        console.log(`-${item.name} | Barcode: ${item.barcode} | Price: $${item.price} | Quantity: ${item.quantity} | Category: ${item.category}`);
        
    }
}

// =================
// Sort Function
// =================

function sortInventoryByName(searchInput){
    searchInput.sort((a,b)=>a.name.localeCompare(b.name))
}

function sortInventoryByPrice(searchInput){
    searchInput.sort((a,b)=>
        a.price-b.price );
}

function sortInventoryByCategory(searchInput){
    searchInput.sort((a,b)=>a.category.localeCompare(b.category))
};

function sortInventoryByQuantity(searchInput){
searchInput.sort((a,b)=>a.quantity-b.quantity);
};

//========================
//Print Inventory Function
//========================


function printInventory(searchInput){
    searchInput.forEach(item => {console.log(`Name: ${item.name} | Category: ${item.category} | Price: $${item.price} | Quantity: ${item.quantity} | Barcode: ${item.barcode}`)})

    }

//=====================
//Filter Function//
//=====================
function filterbyKeyword(searchInput){
const results = marketInventory.filter(item=> item.name.toLowerCase().includes(searchInput.toLowerCase()));
    if ( results.length>0){
    console.log("Items found: ", results);
    return results;
    }
    console.log("items not found.")
    return[];
}

function filterbyCategory(searchInput){
    const results = marketInventory.filter(item=> item.category.toLowerCase().includes(searchInput.toLowerCase()));
    if(results.length>0){
        console.log("Items found: ", results);
        return results;
    }
    console.log("items not found.")
    return[];
}

function filterbyBarcode(searchInput){
    const results = marketInventory.filter(item=>item.barcode.startsWith(searchInput.toString()));
    if(results.length>0){
        console.log("Item has been found: ", results);
        return results;
    }   
        console.log("Item is not found!");
        return[];
}

function filterByPrice(searchInput){
    const results = marketInventory.filter(item=> item.price.toString().startsWith(searchInput.toString()));
    if(results.length>0){
        console.log("Item has been found: ", results);
        return results;
    }
    console.log("Item is not found!");
    return[];
}

function filterbyQuantity(searchInput){
    const results = marketInventory.filter(item=> item.quantity<=searchInput);
    if(results.length>0){
        console.log("Item has been found: ", results);
        return results;
    }
    console.log(`Item less than or equal to ${searchInput} is not found!`);
    return [];


}






//===========
//Testing
//===========


// searchInventory("flaming hot cheetos");
// addInventory("Avocado", 2.49, "Produce", "678905432189", 13);
// sellItem("avocado");
// restockQuantity("avocado", 20);
// lowStock();
// updateItem("flaming hot cheetos", null, null, 2.99);
// removeItem("flaming hot cheeots");
// displayInventory();
// filterbyCategory("pro");
// filterbyBarcode("7");
// filterByPrice(2.99);
// filterbyQuantity(20);
// sortInventoryByPrice(marketInventory);
// printInventory(marketInventory);