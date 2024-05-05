import React, { useEffect, useState } from 'react';

export default function App() {
  const [dogImage, setDogImage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((data) => {
        setDogImage(data.message);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" />
      )}
    </>
  );
}
