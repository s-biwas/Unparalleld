// ClothesItem.tsx
import React from 'react';

interface ClothesItemProps {
  id: number;
  name: string;
  image: string;
  price: number;
}

const ClothesItem: React.FC<ClothesItemProps> = ({ id, name, image, price }) => {
    return (
      <>
        <div className="clothes-item border border-gray">
          <img src={image} alt={name} height={200} width={300}/>
          <div className="item-details">
            <h3>{name}</h3>
            <p>${price}</p>
            {/* Add more details if needed */}
          </div>
        </div>
        {id % 3 === 0 && <br/>}
      </>
    );
  };
  

export default ClothesItem;
