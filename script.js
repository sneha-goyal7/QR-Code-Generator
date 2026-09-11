const qrText=document.getElementById('qr-text');
const sizes=document.getElementById('sizes');
const generateBtn=document.getElementById('generateBtn');
const downloadBtn=document.getElementById('downloadBtn');
const qrConatainer=document.querySelector('.qr-body');

let size=sizes.value;

generateBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    isEmptyInput();
});

sizes.addEventListener('change',(e)=>{
    size=e.target.value;
    isEmptyInput();
});

downloadBtn.addEventListener('click',()=>{
    let img=document.querySelector('.qr-body img')
    if(img!==null){
        let imagAttr=img.getAttribute('src');
        downloadBtn.setAttribute("href",imgAttr);
    }
    else{
        downloadBtn.setAttribute("href",`${document.qquerySelector('canvas').toDataURL}`);
    }
})

function isEmptyInput(){
    //qrText.value.length>0?generateQRCode():alert("enpty block");
    if(qrText.value.length>0){
        generateQRCode();
    }
    else{
        alert("Enter the text or URL to generate your QR Code");
    }
}

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