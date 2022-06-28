import React from 'react';

function BuyClothes({fashion}) {
    return(
        <div className="products">
            {fashion.map((element => {
                // eslint-disable-next-line 
                const {id, name, searchTerm, price, image} = element;
                return <div className="product-card">
                    <img src={image} alt="dress" width="320px" height="450px"/>
                    <div className="product-info">
                        <h3>{name}</h3>
                        <h4>$ {price}</h4>
                    </div>

                </div>
            }))}
        </div>
    )
}

export default BuyClothes;