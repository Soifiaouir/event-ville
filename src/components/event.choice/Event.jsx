import React, { useState } from 'react';
import './Event.style.css';

const Event = ({ onEventSelect }) => { //pour demmander l'appartion du second composant au click 
    const [selectedEvent, setSelectedEvent] = useState(null);

    const eventChoices = [ // choix des event
        { id: 1, name: 'Match', type: 'match' },
        { id: 2, name: 'Festival', type: 'festival' },
        { id: 3, name: 'Vote', type: 'vote' },
    ];

    const handleEventSelect = (event) => {
        setSelectedEvent(event);
        onEventSelect(event);
    };

    const handleReset = () => {
        setSelectedEvent(null);
    };

    return ( // renvois du composant = patir visible avec les 3 choix en boutons et du css du composant également 
        <div className="event">
            <div className={`background-image ${selectedEvent ? selectedEvent.type : ''}`}></div>
            <h2>Proposition d'événement :</h2>
            {eventChoices.map(event => (
                <button key={event.id} onClick={() => handleEventSelect(event)}>
                    {event.name}
                </button>
            ))}
            {selectedEvent && (
                <div>
                    <p>Vous avez sélectionné : {selectedEvent.name}</p>
                    <button onClick={handleReset}>Réinitialiser</button>
                </div>
            )}
        </div>
    );
};

export default Event;
