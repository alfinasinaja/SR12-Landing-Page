import React, { useState, useEffect } from 'react';
import jsQR from 'jsqr';

const ScanQR = () => {
  const [result, setResult] = useState('');

  useEffect(() => {
    const loadImage = async () => {
      try {
        const response = await fetch('/sample.png'); // Ganti dengan path yang sesuai
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);

        const img = new Image();
        img.src = url;

        img.onload = () => {
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          canvas.width = img.width;
          canvas.height = img.height;

          context.drawImage(img, 0, 0, img.width, img.height);
          const imageData = context.getImageData(0, 0, img.width, img.height);
          
          const code = jsQR(imageData.data, imageData.width, imageData.height);

          if (code) {
            setResult(code.data);
          } else {
            setResult('QR Code not found.');
          }
        };
      } catch (error) {
        console.error('Error loading image:', error);
      }
    };

    loadImage();
  }, []);

  return (
    <div>
      <p>{result}</p>
    </div>
  );
};

export default ScanQR;
