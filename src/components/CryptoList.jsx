import React from 'react';
import CryptoCard from './CryptoCard';
import './CryptoList.css';

const CryptoList = ({ coinsData }) => {
  return (
    <div>
      {coinsData.map((coin, index) => {
        console.log(coinsData);
        return (
          <CryptoCard
            key={index}
            image={coin.image}
            name={coin.name}
            price={coin.current_page}
          />
        );
      })}
    </div>
  );
};

export default CryptoList;
