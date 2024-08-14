const contenedorQR = document.getElementById('contenedorQR');
const formQR = document.getElementById('formQR');
const qrcode = new QRCode(contenedorQR); 

formQR.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const linkValue = formQR.link.value.trim(); 

  if (!isValidURL(linkValue)) {
    alert('Please enter a valid URL.');
    return; 
  }
  qrcode.makeCode(linkValue);
});

function isValidURL(url) {
  const urlPattern = /^(http|https):\/\/[\w.-]+(?:\.[\w.-]+)*\/?\S*$/;
  return urlPattern.test(url);
}
