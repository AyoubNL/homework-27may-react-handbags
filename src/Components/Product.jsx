const Product = ({span, src, alt, p, h4}) => {
    return (

        <article>
            <span>{span}</span>
            <img src={src} alt={alt}/>
            <p>{p}</p>
            <h4>{h4}</h4>
        </article>
    );
};

export default Product;