const finalCarts = [];

async function getData() {

    let response = await fetch("https://dummyjson.com/carts");

    let data = await response.json();

    const carts = data.carts;

    for (let i = 0; i < carts.length; i++) {

        finalCarts.push(...carts[i].products);

    }

    const main = document.querySelector("#main");

    for (let i = 0; i < finalCarts.length; i++) {

        let cart = finalCarts[i];

        main.innerHTML += `
        
            <div class="card" style="width: 18rem;">

                <img src="${cart.thumbnail}"
                     class="card-img-top"
                     alt="${cart.title}"
                     style="height: 200px; object-fit: contain;">

                <div class="card-body">

                    <h5 class="card-title">${cart.title}</h5>

                    <p class="card-text">
                        Price: $${cart.price}
                    </p>

                    <p class="card-text">
                        Quantity: ${cart.quantity}
                    </p>

                    <a href="#" class="btn btn-primary">
                        View Product
                    </a>

                </div>

            </div>

        `;

    }

}

getData();