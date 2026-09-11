const qrText=document.getElementById('qr-text');
const sizes=document.getElementById('sizes');
const generateBtn=document.getElementById('generateBtn');
const downloadBtn=document.getElementById('downloadBtn');
const qrConatainer=document.querySelector('.qr-body');

let size=sizes.value;

generateBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    generateQRCode();
});

sizes.addEventListener('change',(e)=>{
    size=e.target.value;
    generateQRCode();
});

function generateQRCode(){
    qrConatainer.innerHTML = ""; // purana QR clear karne ke liye
    new QRCode(qrConatainer,{
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#e85216",
    });
}

 