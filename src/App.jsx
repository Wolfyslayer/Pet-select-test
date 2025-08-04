import React, { useState } from 'react';
import PetSlot from './PetSlot';
import './styles.css';

export default function App() {
  const [equippedPet, setEquippedPet] = useState(null);

  const pets = [
    { id: 1, name: 'Fluffy', icon: '/images/fluffy_icon.png', full: '/images/fluffy_full.png' },
    { id: 2, name: 'Spiky', icon: '/images/spiky_icon.png', full: '/images/spiky_full.png' },
    // Add more pets as needed
  ];

  const equipPet = (pet) => {
    setEquippedPet(pet);
  };

  const removePet = () => {
    setEquippedPet(null);
  };

  return (
    <div className="app">
      <h1>Choose Your Pet</h1>
      <div className="pet-list">
        {pets.map(pet => (
          <div key={pet.id} className="pet-option" onClick={() => equipPet(pet)}>
            <img src={pet.icon} alt={pet.name} />
            <span>{pet.name}</span>
          </div>
        ))}
      </div>
      <PetSlot pet={equippedPet} onRemove={removePet} />
    </div>
  );
}