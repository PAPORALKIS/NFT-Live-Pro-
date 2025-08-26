// Dark/Light Mode
function toggleDarkMode(){
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}
if(localStorage.getItem('darkMode')==='true'){ document.body.classList.add('dark-mode'); }

// Collapsible sections
function toggleSection(el){
  const content = el.nextElementSibling;
  content.style.display = (content.style.display==='none') ? 'block':'none';
}
document.querySelectorAll('.section').forEach(s=>s.style.display='block');

// Lightbox
const lightbox = document.getElementById('lightbox');
const lbImage = lightbox.querySelector('img');
const lbCaption = lightbox.querySelector('.lightbox-caption');
let images = document.querySelectorAll('img');
let currentIndex = 0;

images.forEach((img,i)=>{img.addEventListener('click',()=>{currentIndex=i; openLightbox();});});
function openLightbox(){ lightbox.style.display='flex'; lbImage.src=images[currentIndex].src; lbCaption.textContent=images[currentIndex].alt||''; }
function closeLightbox(){ lightbox.style.display='none'; }
function prevImage(){ currentIndex=(currentIndex-1+images.length)%images.length; openLightbox();}
function nextImage(){ currentIndex=(currentIndex+1)%images.length; openLightbox(); }

// PDF Export
function generatePDF(){
  const opt={margin:0.5,filename:'Rapport_NFT_Ultime_Pro.pdf',image:{type:'jpeg',quality:0.98},html2canvas:{scale:2,useCORS:true},jsPDF:{unit:'in',format:'a4',orientation:'portrait'}};
  html2pdf().set(opt).from(document.body).save();
}
