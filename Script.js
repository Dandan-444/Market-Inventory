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

// ===============
// Search Function
// ===============
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





// ============
// Add Function
// ============

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


// ==================
// Sell Item function
// ==================


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


// ================
// Restock Function
// ================

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




// ==================
// Low Stock Function
// ==================
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

// ====================
// Update Item Function
// ====================

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


// ===============
// Remove Function
// ===============

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

// =============
// Sort Function
// =============

function sortInventoryByLetter(arrayName){
    arrayName.sort((a,b)=>a.name.localeCompare(b.name))
}

function sortInventoryByPrice(arrayName){
    arrayName.sort((a,b)=>
        a.price-b.price );
}

function sortInventoryByCategory(arrayName){
    arrayName.sort((a,b)=>a.category.localeCompare(b.category))
};

    function sortInventoryByQuantity(arrayName){
    arrayName.sort((a,b)=>a.quantity-b.quantity);
    };

//========================
//Print Inventory Function
//========================


function printInventory(arrayName){
    arrayName.forEach(item => {console.log(`Name: ${item.name} | Category: ${item.category} | Price: $${item.price} | Quantity: ${item.quantity} | Barcode: ${item.barcode}`)})

    }

//===============
//Filter Function
//===============
function filterbyKeyword(stringName){
const results = marketInventory.filter(item=> item.name.toLowerCase().includes(stringName.toLowerCase()));
    if ( results.length>0){
    console.log("Items found: ", results);
    return results;
    }
    console.log("items not found.")
    return[];
}

function filterbyCategory(stringName){
    const results = marketInventory.filter(item=> item.category.toLowerCase().includes(stringName.toLowerCase()));
    if(results.length>0){
        console.log("Items found: ", results);
        return results;
    }
    console.log("items not found.")
    return[];
}
addInventory("Avocado", 2.49, "Produce", "678905432189", 13);
filterbyCategory("pro");

function filterbyBarcode(stringName){
    const results = marketInventory.filter(item=>item.barcode.startsWith(stringName.toString()));
    if(results.length>0){
        console.log("Item has been found: ", results);
        return results;
    }   
        console.log("Item is not found!");
        return[];
}

function filterByPrice(stringName){
    const results = marketInventory.filter(item=> item.price.toString().startsWith(stringName.toString()));
    if(results.length>0){
        console.log("Item has been found: ", results);
        return results;
    }
    console.log("Item is not found!");
    return[];
}

function filterbyQuantity(stringName){
    const results = marketInventory.filter(item=> item.quantity<=stringName);
    if(results.length>0){
        console.log("Item has been found: ", results);
        return results;
    }
    console.log(`Item less than or equal to ${stringName} is not found!`);
    return [];


}

//======================
//Advanced Search Filter
//======================

function advancedFilterbyQuantity(searchInput){
    const match = searchInput.match(/^(<=|>=|==|===|<|>)\s*(\d+(\.\d+)?)$/);
    if (!match){
        console.log("Error input is invalid. Please enter correct input");
        return[];
    }
    const operator =match[1];
    const number = parseInt(match[2], 10);
    const result = marketInventory.filter(item=>{
        switch(operator){
            case "<=":  return  item.quantity <= number;
            case ">=":  return  item.quantity >= number;
            case "==":  return  item.quantity == number;
            case "===": return  item.quantity === number;
            case "<": return    item.quantity < number;
            case ">": return    item.quantity > number;
            default: false;

        }
    });
    if(result.length>0){
        console.log("Item has been found: ", result);
        return result;
    }
    else {
        console.log("Item has not been found.")
    };
};



function advancedFilterbyPrice(searchInput){
    const match = searchInput.match(/^(>=|<=|===|==|<|>)\s*(\d+(\.\d+)?)$/);
    if(!match){
        console.log("Invalid Input. Please enter correct input.")
        return [];
    }
    const operator = match[1];
    const number = parseFloat(match[2])
    const result = marketInventory.filter(item=>{
        switch(operator){
            case ">=": return item.price >= number;
            case "<=": return item.price <= number;
            case "===": return item.price === number;
            case "==":  return item.price == number;
            case "<":  return item.price < number;
            case ">":  return item.price > number;
            default: return false;
        }
    });
    if(result.length>0){
        console.log("Item has been found: ", result);
        return result;
    } else {
        console.log("Item has not been found.");
        return [];
    }
};

function multipleConditionalFilter(searchInput){
    const result = marketInventory.filter(item=>{
        if(searchInput.category){
            if(!item.category.toLowerCase().includes(searchInput.category.toLowerCase())){
                return false;
            }
        }
        if(searchInput.name){
            if(!item.name.toLowerCase().includes(searchInput.name.toLowerCase())){
                return false;
            }
        }
        if(searchInput.barcode){
            if(!item.barcode.includes(searchInput.barcode)){
                return false;
            }
        }
        if(searchInput.price){
            if(!filterbyPrice_conditional(item.price, searchInput.price)) return false;
            
        }
        if(searchInput.quantity){
            if(!filterbyQuantity_conditional(item.quantity, searchInput.quantity)) return false;
        }
        return true;
    })
    
    if(result.length > 0){
        console.log("Item has been found: ", result);
        return result
    } else {
        console.log("No item has been found.");
        return [];
    }
    
}

function filterbyPrice_conditional(price, searchInput){
    const match = searchInput.match(/^(<=|>=|==|===|<|>)\s*(\d+(\.\d+)?)$/);
    if(!match){
        console.log("Invalid operator. Please enter correct operator.");
        return false;
    }
    const operator = match[1];
    const number =  parseFloat(match[2]);
    switch(operator){
        case "<=": return price <= number;
        case ">=": return price >= number;
        case "==": return price == number;
        case "===": return price === number;
        case ">": return price > number;
        case "<": return price < number;
        default: return false;
    }
}

function filterbyQuantity_conditional(quantity, searchInput){
    const match = searchInput.match(/^(<=|>=|==|===|<|>)\s*(\d+(\.\d+)?)$/);
    if(!match){
        console.log("Invalid operator. Please enter correct operator.");
        return false;
    }
    const operator = match[1];
    const number = parseInt(match[2],10);
    switch (operator){
        case "<=": return quantity <= number;
        case ">=": return quantity >= number;
        case "==": return quantity == number;
        case "===": return quantity === number;
        case "<": return quantity < number;
        case ">": return quantity > number;
        default: return false;
    }

}




//=======
//Testing
//=======


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
// advancedFilterbyQuantity(">= 10");
// advancedFilterbyPrice ( ">= 2.99");

