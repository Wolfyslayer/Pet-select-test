import React, { useState } from 'react';

export default function PetSlot({ pet, onRemove }) {
  const [showFull, setShowFull] = useState(false);

  if (!pet) {
    return <div className="pet-slot empty">Empty Slot</div>;
  }

  return (
    <div
      className="pet-slot"
      onClick={onRemove}
      onMouseEnter={() => setShowFull(true)}
      onMouseLeave={() => setShowFull(false)}
    >
      <img
        src={showFull ? pet.full : pet.icon}
        alt={pet.name}
        className="pet-image"
      />
      <span className="action-text">{showFull ? 'Remove' : 'Equipped'}</span>
    </div>
  );
}