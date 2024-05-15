const Button = ({buttonText, disabled, type, onClick}) => {
    return (

        <button
            type={type}
            disabled={disabled}
            onClick={onClick}>
            {buttonText}
        </button>
    );
};

export default Button;