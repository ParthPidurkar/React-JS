import { Component } from "react";

class ProductList extends Component {

    products = [

        {

          "id": "1",

          "name": "HP Laptop",

          "price": 100000,

          "description": "HP Gaming Laptop",

          "inStock": true,

          "imagePath": "images/111.png"

        },

        {

          "id": 0,

          "name": "Nokia 3305",

          "price": "5000",

          "description": "",

          "inStock": true,

          "imagePath": "images/222.png"

        },

        {

            "id": 0,

            "name": "Nokia 2000",

            "price": "10000",

            "description": "",

            "inStock": true,

            "imagePath": "images/222.png"

          }

    ];
 editProduct = (evt) => {
    console.log("Button Clicked");
 }
    render() {

        return (

            <div>
            <table border={"1"}>
                {this.products.map((product) => (

                <tr><td> {product.name}</td> <td> {product.price} </td>
                <td><button onClick={this.editProduct}>Edit</button></td></tr>

                ))}
            </table>
            </div>

        )

    }

}

export default ProductList