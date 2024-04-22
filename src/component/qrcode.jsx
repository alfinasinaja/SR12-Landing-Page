import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = ({ data }) => {
  // Memeriksa apakah data tersedia sebelum membuat QR Code
  if (!data) {
    return null;
  }

  return (
    <div>
      <QRCode value={String(data)} />
    </div>
  );
};

export default QRCodeGenerator;
