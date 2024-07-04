import React, { useState } from 'react';
import './App.css';
import Event from './components/event.choice/Event'; //apl des composants//
import Counter from './components/counter/Counter';

const App = () => {
    const [eventSelected, setEventSelected] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const handleEventSelect = (event) => {// pour placer le choix d'event sur le page pui
        setSelectedEvent(event);
        setEventSelected(true);
    };

    return (// patie visible du jsx par le visiteur , pui spour afficher les 2 composants //
        <div className="App">
            <h1>Mon Application React</h1>
            {!eventSelected ? (
                <Event onEventSelect={handleEventSelect} />
            ) : (
                <>
                    <Counter selectedEvent={selectedEvent} />
                    <p>Vous avez sélectionné : {selectedEvent.name}</p>
                </>
            )}
        </div>
    );
};

export default App;
