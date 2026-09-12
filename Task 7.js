//Task1
//Use this API:
//https://fakestoreapi.com/products
//Requirements:
//Fetch all products.
//Convert response using .json().
//Display:
//Product title
//Price
//Category
//Use map() to create a new array containing only:
//title
//price
//Use filter() to find products with price greater than $100.
//Use find() to find the first product in the "electronics" category.
//Use reduce() to calculate the total price.
//Use sort() to arrange products from highest price to lowest.
//Handle API errors using .catch().
//Display a completion message using .finally().
fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(products => {

        // Display all products
    console.log("----- ALL PRODUCTS -----");

    products.forEach(product => {
        console.log("Title:", product.title);
        console.log("Price: $" + product.price);
        console.log("Category:", product.category);
        console.log("-----------------------");
    });

        // map() - Create new array with only title and price
    const productDetails = products.map(product => ({
        title: product.title,
        price: product.price
    }));

    console.log("----- MAP: TITLE & PRICE -----");
    console.log(productDetails);


        // filter() - Products with price greater than $100
    const expensiveProducts = products.filter(product => product.price > 100);

    console.log("----- PRODUCTS ABOVE $100 -----");
    console.log(expensiveProducts);


        // find() - First product in electronics category
    const firstElectronic = products.find(
        product => product.category === "electronics"
    );

    console.log("----- FIRST ELECTRONICS PRODUCT -----");
    console.log(firstElectronic);


        // reduce() - Calculate total price
    const totalPrice = products.reduce(
        (total, product) => total + product.price,
        0
    );

    console.log("----- TOTAL PRICE -----");
    console.log("$" + totalPrice.toFixed(2));


        // sort() - Highest price to lowest
    const sortedProducts = [...products].sort(
        (a, b) => b.price - a.price
    );

    console.log("----- SORTED: HIGH TO LOW -----");
    console.log(sortedProducts);

    })
.catch(error => {
    console.error("API Error:", error);
})
.finally(() => {
    console.log("----- COMPLETION MESSAGE -----");
    console.log("Product API operation completed.");
});

//Task 2 — Product Category Dashboard
//Use:
//https://fakestoreapi.com/products
//Create a console-based dashboard.
//Expected output:
//===== PRODUCT DASHBOARD =====
//Total Products: 20
//Electronics: 6
//Jewelery: 4
//Men's Clothing: 6
//Women's Clothing: 4
//Highest Price: $999.99
//Lowest Price: $5.99
//Average Price: $XXX
//Students must use:
//fetch()
//map()
//filter()
//reduce()
//sort()
//Functions
//Template literals
fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(products => {

    // Function to count category
    function countCategory(category) {
        return products.filter(product =>
            product.category === category
        ).length;
    }

    // map() - get all prices
    const prices = products.map(product => product.price);

    // reduce() - total price
    const totalPrice = prices.reduce(
        (total, price) => total + price,
        0
    );

    // sort() - highest to lowest
    const sortedPrices = [...prices].sort((a, b) => b - a);

    const highestPrice = sortedPrices[0];
    const lowestPrice = sortedPrices[sortedPrices.length - 1];

    // Average
    const averagePrice = totalPrice / products.length;

    // Dashboard
    console.log(`
===== PRODUCT DASHBOARD =====

Total Products: ${products.length}

Electronics: ${countCategory("electronics")}
Jewelery: ${countCategory("jewelery")}
Men's Clothing: ${countCategory("men's clothing")}
Women's Clothing: ${countCategory("women's clothing")}

Highest Price: $${highestPrice.toFixed(2)}
Lowest Price: $${lowestPrice.toFixed(2)}
Average Price: $${averagePrice.toFixed(2)}
`);
})
.catch(error => {
    console.log(`Error: ${error}`);
})
.finally(() => {
    console.log("===== DASHBOARD COMPLETED =====");
});

//Task 3 — User & Post API
//Use these APIs:
//https://jsonplaceholder.typicode.com/users
//https://jsonplaceholder.typicode.com/posts
//Requirements:
//Fetch users.
//Display all user names.
//Display user name + email.
//Find the user with ID 5.
//Filter users from a particular city.
//Fetch posts.
//Display posts written by user ID 1.
//Count how many posts user ID 1 has created.
//Find the first post with more than 50 characters in the title.
// API URLs
let task3UsersAPI = "https://jsonplaceholder.typicode.com/users";
let task3PostsAPI = "https://jsonplaceholder.typicode.com/posts";

// 1. Fetch users

fetch(task3UsersAPI)
.then((task3UserResponse) => {
    return task3UserResponse.json();
})
.then((task3Users) => {

    // 2. Display all user names

    console.log("===== ALL USER NAMES =====");

    task3Users.map((task3User) => {
        console.log(task3User.name);
    });

    // 3. Display user name + email

    console.log("===== USER NAME + EMAIL =====");

    task3Users.map((task3User) => {
        console.log("Name:", task3User.name);
        console.log("Email:", task3User.email);
        console.log("-------------------------");
    });

    // 4. Find the user with ID 5

    let task3UserID5 = task3Users.find((task3User) => {
        return task3User.id === 5;
    });

    console.log("===== USER WITH ID 5 =====");
    console.log(task3UserID5);

    // 5. Filter users from a particular city

    let task3UsersFromCity = task3Users.filter((task3User) => {
        return task3User.address.city === "Gwenborough";
    });

    console.log("===== USERS FROM GWENBOROUGH =====");
    console.log(task3UsersFromCity);
})
.catch((task3UserError) => {
    console.log("Users API Error:", task3UserError.message);
});


// 6. Fetch posts

fetch(task3PostsAPI)
.then((task3PostResponse) => {
    return task3PostResponse.json();
})
.then((task3Posts) => {

    // 7. Display posts written by user ID 1

    let task3User1Posts = task3Posts.filter((task3Post) => {
        return task3Post.userId === 1;
    });

    console.log("===== POSTS BY USER ID 1 =====");
    console.log(task3User1Posts);

    // 8. Count posts created by user ID 1

    let task3User1PostCount = task3Posts.filter((task3Post) => {
        return task3Post.userId === 1;
    }).length;

    console.log("Number of posts by User ID 1:", task3User1PostCount);

    // 9. Find the first post with more than 50 characters in the title

    let task3LongTitlePost = task3Posts.find((task3Post) => {
        return task3Post.title.length > 50;
    });

    console.log("===== FIRST POST WITH TITLE > 50 CHARACTERS =====");
    console.log(task3LongTitlePost);
})
.catch((task3PostError) => {
    console.log("Posts API Error:", task3PostError.message);
});

//Task 4 — API + Search
//Use:
//https://fakestoreapi.com/products
//Ask the user:
//Enter product category:
//Example:
//electronics
//Then display only products belonging to that category.
//Also ask:
//Enter maximum price:
//Example:
//500
//Display products matching both conditions:
//Category = electronics
//Price <= 500
//Concepts: prompt(), fetch(), filter(), conditions, functions.
async function searchProducts() {
    // Ask the user for category
    let category = prompt("Enter product category:");

    // Ask the user for maximum price
    let maxPrice = Number(prompt("Enter maximum price:"));

    // Fetch products from API
    let response = await fetch("https://fakestoreapi.com/products");
    let products = await response.json();

    // Filter products based on category and price
    let result = products.filter(function(product) {
        return product.category === category &&
               product.price <= maxPrice;
    });

    // Display results
    if (result.length > 0) {
        console.log("Matching Products:");

        result.forEach(function(product) {
            console.log(
                "Title: " + product.title +
                " | Category: " + product.category +
                " | Price: $" + product.price
            );
        });
    } else {
        console.log("No products found.");
    }
}

// Call the function
searchProducts();

//Task 5 — API Shopping Cart
//Use:
//https://fakestoreapi.com/products
//Fetch the products and create a shopping cart.
//The student should:
//Display available products.
//Select products using their IDs.
//Add selected products to an array.
//Calculate cart total using reduce().
//Apply discount:
//Above $100 → 10%
//Above $200 → 20%
//Display final amount.
//Example:
//===== CART =====
//Product 1: Laptop
//Price: $999
//Product 2: Mouse
//Price: $50
//Total: $1049
//Discount: 20%
//Final Amount: $839.20
async function shoppingCart() {

    // Fetch products
    let response = await fetch("https://fakestoreapi.com/products");
    let products = await response.json();

    // Display available products
    console.log("===== AVAILABLE PRODUCTS =====");

    products.forEach(function(product) {
        console.log(
            "ID: " + product.id +
            " | " + product.title +
            " | Price: $" + product.price
        );
    });

    // Create empty cart
    let cart = [];

    // Select products
    while (true) {
        let id = Number(
            prompt("Enter product ID to add to cart (0 to finish):")
        );

        if (id === 0) {
            break;
        }

        // Find product by ID
        let product = products.find(function(item) {
            return item.id === id;
        });

        if (product) {
            cart.push(product);
            console.log(product.title + " added to cart.");
        } else {
            console.log("Invalid product ID.");
        }
    }

    // Display cart
    console.log("===== CART =====");

    cart.forEach(function(product, index) {
        console.log(
            "Product " + (index + 1) + ": " + product.title
        );
        console.log("Price: $" + product.price);
    });

    // Calculate total using reduce()
    let total = cart.reduce(function(sum, product) {
        return sum + product.price;
    }, 0);

    // Calculate discount
    let discount = 0;

    if (total > 200) {
        discount = 20;
    } else if (total > 100) {
        discount = 10;
    }

    // Calculate discount amount
    let discountAmount = total * discount / 100;

    // Calculate final amount
    let finalAmount = total - discountAmount;

    // Display bill
    console.log("Total: $" + total.toFixed(2));
    console.log("Discount: " + discount + "%");
    console.log("Final Amount: $" + finalAmount.toFixed(2));
}

// Call function
shoppingCart();

//Task 6 — FakeStore Product Report
//This is the best intermediate assignment for your current syllabus.
//API:
//https://fakestoreapi.com/products
//Create a complete product report.
//Students must implement:
//1. Fetch API
//fetch(apiLink)
//2. Convert response
//response.json()
//3. Display all products
//Use:
//forEach()
//4. Create product names array
//Use:
//map()
//5. Filter expensive products
//price > 100
//Use:
//filter()
//6. Find electronics product
//Use:
//find()
//7. Calculate total price
//Use:
//reduce()
//8. Check products
//Use:
//some()
//every()
//9. Sort
//Highest price → lowest price.
//10. Error handling
//Use:
//.catch()
//.finally()
//Expected final output
//========== PRODUCT REPORT ==========
//Total Products: 20
//Product Names:
//- Fjallraven Backpack
//- Mens Casual Premium Slim Fit T-Shirts
//- Mens Cotton Jacket
//...
//Products Above $100:
//...
//Electronics Product:
//...
//Total Product Value:
//$XXXX
//Any Product Above $500:
//true
//All Products Above $1:
//true
//Highest → Lowest:
//...
//This stays within the concepts actually present in your student's code, especially the API flow using fetch(), .json(), .then(), .catch() and .finally().
let apiLink = "https://fakestoreapi.com/products";

fetch(apiLink)
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {

        // 1. Display all products
        console.log("========== PRODUCT REPORT ==========");

        console.log("\nTotal Products: " + products.length);

        console.log("\nAll Products:");

        products.forEach(function(product) {
            console.log(
                product.id + ". " +
                product.title +
                " - $" + product.price
            );
        });


        // 2. Create product names array using map()
        let productNames = products.map(function(product) {
            return product.title;
        });

        console.log("\nProduct Names:");

        productNames.forEach(function(name) {
            console.log("- " + name);
        });


        // 3. Filter expensive products using filter()
        let expensiveProducts = products.filter(function(product) {
            return product.price > 100;
        });

        console.log("\nProducts Above $100:");

        expensiveProducts.forEach(function(product) {
            console.log(
                product.title + " - $" + product.price
            );
        });


        // 4. Find electronics product using find()
        let electronicsProduct = products.find(function(product) {
            return product.category === "electronics";
        });

        console.log("\nElectronics Product:");

        if (electronicsProduct) {
            console.log(
                electronicsProduct.title +
                " - $" +
                electronicsProduct.price
            );
        } else {
            console.log("No electronics product found.");
        }


        // 5. Calculate total price using reduce()
        let totalPrice = products.reduce(function(total, product) {
            return total + product.price;
        }, 0);

        console.log("\nTotal Product Value: $" + totalPrice.toFixed(2));


        // 6. Check if any product is above $500 using some()
        let anyAbove500 = products.some(function(product) {
            return product.price > 500;
        });

        console.log("\nAny Product Above $500: " + anyAbove500);


        // 7. Check if all products are above $1 using every()
        let allAbove1 = products.every(function(product) {
            return product.price > 1;
        });

        console.log("\nAll Products Above $1: " + allAbove1);


        // 8. Sort highest price to lowest price
        let sortedProducts = [...products].sort(function(a, b) {
            return b.price - a.price;
        });

        console.log("\nHighest → Lowest:");

        sortedProducts.forEach(function(product) {
            console.log(
                product.title +
                " - $" +
                product.price
            );
        });

    })
    .catch(function(error) {
        console.log("Error fetching products:", error);
    })
    .finally(function() {
        console.log("\n========== REPORT COMPLETED ==========");
    });