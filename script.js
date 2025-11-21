// Load semua file secara otomatis dari folder gallery
const galleryFolder = 'gallery/';


// LIST FILE MANUAL (ISI SENDIRI)
const files = [
'photo1.jpg',
'photo2.jpg',
'video1.mp4',
'video2.mp4'
// tambahkan lagi sesuai kebutuhan
];


const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalVideo = document.getElementById("modalVideo");
const closeBtn = document.getElementById("closeBtn");


files.forEach(file => {
const ext = file.split('.').pop().toLowerCase();
const item = document.createElement(ext === 'mp4' ? 'video' : 'img');


item.src = galleryFolder + file;
item.classList.add('gallery-item');
if (ext === 'mp4') item.muted = true;


item.addEventListener('click', () => openModal(file));


gallery.appendChild(item);
});


function openModal(file) {
modal.style.display = "block";


const ext = file.split('.').pop().toLowerCase();


if (ext === "mp4") {
modalImg.style.display = "none";
modalVideo.style.display = "block";
modalVideo.src = galleryFolder + file;
} else {
modalVideo.style.display = "none";
modalImg.style.display = "block";
modalImg.src = galleryFolder + file;
}
}


closeBtn.onclick = () => {
modal.style.display = "none";
modalVideo.pause();
};