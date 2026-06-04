import React from 'react'
import "../styles/ProductCard.css"

const ProductCard = ({data}) => {
    const {title,description,price,image}=data;
    return (
        <article className="product-card">
            <div className="product-card__image" aria-hidden="true">
                <img src={image} alt="" />
            </div>

            <div className="product-card__content">
                <p className="product-card__tag">New Arrival</p>
                <h2 className="product-card__title">{title}</h2>
                <p className="product-card__description">
                    {description}
                </p>

                <div className="product-card__footer">
                    <span className="product-card__price">{price}</span>
                    <button className="product-card__button" type="button">
                        Add to Cart
                    </button>
                </div>
            </div>
        </article>
    )
}

export default ProductCard;