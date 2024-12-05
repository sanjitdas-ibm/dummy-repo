import React from "react";

import './Card.css';

function Card() {

    const products=[
        {
            id:1,
            name:"Apple Iphone 15(Pink, 128 GB)",
            discription:<ul>
                            <li>128 GB Rom</li>
                            <li>15.49cm (6.1 inch) Super Retina XDR Display</li>
                            <li>48MP + 12MP | 12MP Front Camera</li>
                            <li>A16 Bionic Chip, 6 Core Processor Processor</li>
                            <li>1 year warranty for phone and 1 year warranty for in Box Accessories</li>
                        </ul>,
            Rate:"4.6 *",
            Review:"2,20,026 Ratings & 7,793 Reviews",
            price:"₹59,999",
            image:"https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pink_PDP_Image_Position-1__en-IN.jpg?v=1694605258"
        },
        {
            id:2,
            name:"Apple Iphone 15(Blue, 128 GB)",
            discription:<ul>
                            <li>128 GB Rom</li>
                            <li>15.49cm (6.1 inch) Super Retina XDR Display</li>
                            <li>48MP + 12MP | 12MP Front Camera</li>
                            <li>A16 Bionic Chip, 6 Core Processor Processor</li>
                            <li>1 year warranty for phone and 1 year warranty for in Box Accessories</li>
                        </ul>,
            Rate:"4.6 *",
            Review:"2,20,026 Ratings & 7,793 Reviews",
            price:"₹69,999",
            image:"https://iplanet.one/cdn/shop/files/iPhone_15_Blue_PDP_Image_Position-1__en-IN.jpg?v=1695427876&width=1920"
        },
        {
            id:3,
            name:"Apple Iphone 15(Verde, 128 GB)",
            discription:<ul>
                            <li>128 GB Rom</li>
                            <li>15.49cm (6.1 inch) Super Retina XDR Display</li>
                            <li>48MP + 12MP | 12MP Front Camera</li>
                            <li>A16 Bionic Chip, 6 Core Processor Processor</li>
                            <li>1 year warranty for phone and 1 year warranty for in Box Accessories</li>
                        </ul>,
            Rate:"4.6 *",
            Review:"2,20,026 Ratings & 7,793 Reviews",
            price:"₹79,999",
            image:"https://mac-center.com/cdn/shop/files/IMG-10935071_e8d611ec-53bf-4319-8326-91c29d1bbc3b.jpg?v=1723749149&width=823",
        },
    ]


    return (
        products?.map((product,idx) => (
            <div className="card" key={idx}>
            <div className="card-image">
                <img
                    src={ product?.image}
                    alt="amazon-box"
                />
                <div className="check-box">
                <input type="checkbox"/>Add to Compare
                </div>
            </div>
            <div className="card-content">
                    <h2>{product?.name}</h2>
                    <div className="rating-review">
                        <span>{product?.Rate}</span>
                        <p>{product?.Review}</p>
                    </div>
                    <div className="item-discription">
                        {product?.discription}
                    </div>
            </div>
            <div className="price">
                <div className="item-price">
                    <h1>{product?.price}</h1>
                    <img src="./images/Assured.png" alt="This is image" className="item-img"/>
                </div>
                <div className="price-content1">
                    <p className="p1">₹64,000</p>
                    <p className="p2">14% off</p>
                </div>
                <div className="price-content2">
                    <p className="p1">Free delivary</p>
                    <p className="p2">Save extra with combo offers</p>
                    <p className="p3">upto <b>₹32,950</b> off on Exchange</p>
                </div>
            </div>
        </div>
        ))
    );
    
}

export default Card;