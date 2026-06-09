import '../styles/ProductCard.css';

const ProductCardSkeleton = () => {
  return (
    <article className="product-card product-card--skeleton" aria-hidden="true">
      <div className="product-card__image product-card__image--skeleton" />

      <div className="product-card__content">
        <div className="product-card__tag product-card__tag--skeleton" />
        <div className="product-card__title product-card__title--skeleton" />
        <div className="product-card__description product-card__description--skeleton" />

        <div className="product-card__footer">
          <div className="product-card__price product-card__price--skeleton" />
          <div className="product-card__button product-card__button--skeleton" />
        </div>
      </div>
    </article>
  );
};

export default ProductCardSkeleton;