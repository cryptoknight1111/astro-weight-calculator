const audio = document.getElementById('myAudio');
const muteBtn = document.getElementById('mute-btn');
const muteIcon = document.getElementById('mute-icon');
const unmuteIcon = document.getElementById('unmute-icon');

audio.muted = false;
audio.play().catch(() => {});

function syncIcons(){
    const isMuted = audio.muted || audio.paused;
    muteIcon.classList.toggle('hidden', !isMuted);
    unmuteIcon.classList.toggle('hidden', isMuted)
}

muteBtn.addEventListener('click', () => {
    audio.muted = !audio.muted;
    if (!audio.muted) audio.play().catch(() => {})
        syncIcons();
});
syncIcons();
