const galleryFolder = 'gallery/';


// Tambahkan nama file foto/video di sini
const files = [
'photo1.jpg',
'photo2.jpg',
'video1.mp4',
'video2.mp4'
];


const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalVideo = document.getElementById("modalVideo");
const closeBtn = document.getElementById("closeBtn");
const downloadBtn = document.getElementById("downloadBtn");


files.forEach(file => {
const ext = file.split('.').pop().toLowerCase();
const item = document.createElement(ext === 'mp4' ? 'video' : 'img');


item.src = galleryFolder + file;
if (ext === 'mp4') item.muted = true;


item.addEventListener('click', () => openModal(file));


gallery.appendChild(item);
});


function openModal(file) {
modal.style.display = "block";
const ext = file.split('.').pop().toLowerCase();


if (ext === 'mp4') {
modalImg.style.display = "none";
modalVideo.style.display = "block";
modalVideo.src = galleryFolder + file;
} else {
modalVideo.style.display = "none";
modalImg.style.display = "block";
modalImg.src = galleryFolder + file;
}


downloadBtn.href = galleryFolder + file;
}


closeBtn.onclick = () => {
modal.style.display = "none";
modalVideo.pause();
};
