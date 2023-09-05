const ACTIVE="active";

const active_video = document.querySelectorAll(
    ".main-structure .content video"
);
//滤镜特效
const active_video_overlay = document.querySelector(
    ".main-structure .content .video-overlay"
);

//右上角按钮事件
const menu_logo=document.querySelector(".menu-logo");

//缩小特效
const main_structure =document.querySelector(".main-structure");
// 调用文字的js
const main_header = document.querySelector(".content .text-description h1");
const second_header = document.querySelector(".content .text-description h2");
const paragraph = document.querySelector(".content .text-description p");
const text_link=document.querySelector(".content .text-description a")
const menu_button=document.querySelectorAll(".aside-menu a");

//切换视频的
active_video[0].classList.remove(ACTIVE);
active_video[0].classList.add(ACTIVE);
//滤镜特效
active_video_overlay.className="video-overlay video-overlay-spindrift";

main_header.innerHTML=CONTENT_INFO.spindrift.h1;
second_header.innerHTML=CONTENT_INFO.spindrift.h2;
paragraph.innerHTML=CONTENT_INFO.spindrift.p;
text_link.innerHTML="explore"

menu_logo.addEventListener("click",
    () => {
        menu_logo.classList.toggle(ACTIVE);
        main_structure.classList.toggle(ACTIVE);
    });

menu_button.forEach((button,index) => {
    button.addEventListener("click", () => {
        active_video.forEach((video) => {
            video.classList.remove(ACTIVE);
        });
        active_video[index].classList.add(ACTIVE);
        modify_content(index);
    });
    
    
});
function modify_content(index){
    switch (index){
        case 0:
            main_header.innerHTML=CONTENT_INFO.spindrift.h1;
            second_header.innerHTML=CONTENT_INFO.spindrift.h2;
            paragraph.innerHTML=CONTENT_INFO.spindrift.p;

            active_video_overlay.className="video-overlay video-overlay-island";
            break;
        case 1:
            main_header.innerHTML=CONTENT_INFO.lotus.h1;
            second_header.innerHTML=CONTENT_INFO.lotus.h2;
            paragraph.innerHTML=CONTENT_INFO.lotus.p;

            active_video_overlay.className="video-overlay video-overlay-lotus";
            break;
        case 2:
            main_header.innerHTML=CONTENT_INFO.river.h1;
            second_header.innerHTML=CONTENT_INFO.river.h2;
            paragraph.innerHTML=CONTENT_INFO.river.p;

            active_video_overlay.className="video-overlay video-overlay-river";
            break;
        case 3:
            main_header.innerHTML=CONTENT_INFO.autumn.h1;
            second_header.innerHTML=CONTENT_INFO.autumn.h2;
            paragraph.innerHTML=CONTENT_INFO.autumn.p;

            active_video_overlay.className="video-overlay video-overlay-autumn";
            break;
        case 4:
            main_header.innerHTML=CONTENT_INFO.snow.h1;
            second_header.innerHTML=CONTENT_INFO.snow.h2;
            paragraph.innerHTML=CONTENT_INFO.snow.p;
            
            active_video_overlay.className="video-overlay video-overlay-snow";
            break;
        default:
            break;

    }
}

// const menu_logo = document.querySelector(".menu-logo");
// const main_structure = document.querySelector(".main-structure");
// let isMenuOpen = false;

// menu_logo.addEventListener("click", () => {
//   isMenuOpen = !isMenuOpen;
//   if (isMenuOpen) {
//     menu_logo.classList.add(ACTIVE);
//     main_structure.classList.add(ACTIVE);
//   } else {
//     menu_logo.classList.remove(ACTIVE);
//     main_structure.classList.remove(ACTIVE);
//   }
// });

