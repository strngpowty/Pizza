const availableToppings = ['Pepperoni', 'Mushrooms', 'Onions', 'Sausage', 'Bacon'];

const ToppingsSelector = ({ toppings, setToppings}) => {
    const handleToppingChange = (topping) => {
        setToppings(prevToppings => 
            prevToppings.includes(topping)
            ? prevToppings.filter(t => t != topping)
            : [...prevToppings, topping]
        );
    };

    return (
        <div>
            <h2>Select Toppings</h2>
            {availableToppings.map(topping => (
                <label key={topping}>
                    <input
                        type="checkbox"
                        value={topping}
                        checked={toppings.includes(topping)}
                        onChange={() => handleToppingChange(topping)}
                        />
                        {topping}
                </label>
            ))}
        </div>
    );
};

export default ToppingsSelector;