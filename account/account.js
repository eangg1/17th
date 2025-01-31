function selectProfile(profile) {
    document.body.classList.add('fade-out');
    setTimeout(() => {
        if (profile === 'marva') {
            window.location.href = 'homepage.html';
        } else {
            window.location.href = 'https://www.netflix.com/id/';
        }
    }, 1000);
}

window.onload = function () {
    const profiles = document.querySelectorAll('.profile');
    profiles.forEach((profile, index) => {
        profile.style.animationDelay = `${index * 0.2}s`;
    });
};
