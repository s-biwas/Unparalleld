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

const ClothesBrowsingPage: React.FC = () => {
  return (
    <div className="clothes-browsing-page">
      <h1>Clothing Brand</h1>
      <div className="clothes-list flex justify-between">
        {clothesData.map((item) => (
          <div key={item.id} style={{flex: '0 0 33.33%'}}>
            <ClothesItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClothesBrowsingPage;
