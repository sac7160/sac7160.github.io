document.addEventListener("DOMContentLoaded", () => {
    const profile = document.getElementById("profile-hover");
    const body = document.body;
    const profileImg = document.getElementById("profile-img");

    const originalSrc = "images/profile.JPG";
    const hoverSrc = "images/profile_hover2.jpg";

    if (profile && body && profileImg) {
        profile.addEventListener("mouseenter", () => {
            body.classList.add("bg-active");

            // ✅ 부드럽게 페이드 아웃 후 이미지 교체 → 다시 페이드 인
            profileImg.style.opacity = 0;
            setTimeout(() => {
                profileImg.src = hoverSrc;
                profileImg.style.opacity = 1;
            }, 300); // 0.6초 중 절반 지점
        });

        profile.addEventListener("mouseleave", () => {
            body.classList.remove("bg-active");

            profileImg.style.opacity = 0;
            setTimeout(() => {
                profileImg.src = originalSrc;
                profileImg.style.opacity = 1;
            }, 300);
        });
    }
});

// document.addEventListener("DOMContentLoaded", () => {
//     const profile = document.getElementById("profile-hover");
//     const body = document.body;
//     const hoverImg = document.getElementById("hover-central-image");

//     if (profile && body && hoverImg) {
//         profile.addEventListener("mouseenter", () => {
//             body.classList.add("bg-active");
//         });

//         profile.addEventListener("mouseleave", () => {
//             body.classList.remove("bg-active");
//         });
//     }
// });
