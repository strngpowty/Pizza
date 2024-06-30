const sizes = ['small', 'medium', 'large'];

const SizeSelector = ({size, setSize}) => {
    return(
        <div>
            <h2>Select Size</h2>
            {sizes.map(s => (
                <label key={s}>
                    <input
                        type="radio"
                        value={s}
                        checked={size === s}
                        onChange={() => setSize(s)}
                        />
                        {s}
                </label>
            ))}
        </div>
    );
}

export default SizeSelector;