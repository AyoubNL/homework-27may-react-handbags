const Product = ({promotion, picture, pictureName, productName, productPrice}) => {
    return (

        <article>
            <span>{promotion}</span>
            <img src={picture} alt={pictureName}/>
            <p>{productName}</p>
            <h4>{productPrice}</h4>
        </article>
    );
};

export default Product;