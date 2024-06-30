const OrderSummary =({size, toppings}) => {
    return (
        <div>
            <h2>Order Summary</h2>
            <p>Size: {size}</p>
            <p>Toppings: {toppings.join(',') || 'None'}</p>
        </div>
    );
};

export default OrderSummary;