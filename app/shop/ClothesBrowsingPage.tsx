// ClothesBrowsingPage.tsx
import React from 'react';
import ClothesItem from './ClothesItem';

interface ClothesData {
  id: number;
  name: string;
  image: string;
  price: number;
}

const clothesData: ClothesData[] = [
  { id: 1, name: 'T-Shirt', image: '/tshirt.png', price: 19.99 },
  { id: 2, name: 'Jeans', image: '/tshirt.png', price: 39.99 },
  { id: 3, name: 'BEans', image: '/tshirt.png', price: 39.99 },

  // Add more clothing items as needed
];

const ClothesBrowsingPage = () => {
  return (
    <div className="clothes-browsing-page">
      <h1>Clothing Brand</h1>
      
        {clothesData.map((item) => (
          <ClothesItem key={item.id} {...item} />
        ))}
      </div>
  );
};

export default ClothesBrowsingPage;
