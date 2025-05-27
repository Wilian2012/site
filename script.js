// Coloque aqui o link do seu site final (após publicar)
const linkDoSite = "https://seusite.com"; // temporariamente pode usar "http://localhost"

QRious = window.QRCode;
QRCode.toCanvas(document.getElementById('qr-code'), linkDoSite, function (error) {
  if (error) console.error(error);
  console.log('QR code gerado!');
});
