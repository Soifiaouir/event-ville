import React, { useState } from 'react';
import './Counter.style.css';

const Counter = ({ selectedEvent }) => {// pour donner les fonctions du composant à savoir l'augmentation, la baisse et le reset//
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const resetCount = () => {
        setCount(0);
    };

     
    return ( //ce qui sera visible du composant dans app.jsx//
        <div className="counter-app">
            <h1>Compteur : {count}</h1>
            {selectedEvent && (
                <p>Événement sélectionné : {selectedEvent.type}</p>
            )}
            <button onClick={incrementCount}>Incrémenter</button>
            <button onClick={decrementCount}>Décrémenter</button>
            <button onClick={resetCount}>Réinitialiser</button>
        </div>
    );
};

export default Counter;
