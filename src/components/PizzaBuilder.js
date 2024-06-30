import { useState } from 'react';
import SizeSelector from './SizeSelector';
import ToppingsSelector from './ToppingsSelector';
import OrderSummary from './OrderSummary';


const PizzaBuilder = () => {
    const [size, setSize] = useState('');
    const [toppings, setToppings] = useState([]);

    return (
        <div>
            <h1>Pizza Builder</h1>
            <SizeSelector size={size} setSize={setSize} />
            <ToppingsSelector toppings={toppings} setToppings={setToppings} />
            <OrderSummary size={size} toppings={toppings} />
        </div>
    );
};


export default PizzaBuilder;