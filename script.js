const tabs=[...document.querySelectorAll('.tab')];
const video=document.getElementById('mainVideo');
const caption=document.getElementById('videoCaption');
tabs.forEach(tab=>{
  tab.addEventListener('click',()=>{
    tabs.forEach(t=>t.classList.remove('active'));
    tab.classList.add('active');
    const src=tab.dataset.video;
    const lang=tab.dataset.lang;
    video.pause();
    video.innerHTML=`<source src="${src}" type="video/mp4">Your browser does not support the video tag.`;
    video.load();
    caption.textContent=`Now playing: ${lang} version`;
  });
});
