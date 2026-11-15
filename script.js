const nama = "Laura";

const pesan = `
Hai Laura! ♡

First of all, thank you yaa sudah jadi bagian dari cerita selama magang ini. Senang banget bisa kenal Laura, bisa ngobrol, bercanda, dan berbagi cerita selama di sini.

Semoga setelah ini kita tetap keep in touch, jangan sampai jadi asing yaa. Wishing you all the best for your next journey, Laura! 🤍
`;

const warnaNote = "#F9DCE4";
const kodeRahasia = "LAURA";

// MEMBUAT STICKY NOTE
const notesContainer = document.getElementById("notesContainer");

const note = document.createElement("div");
note.className = "note";
note.style.background = warnaNote;

note.innerHTML = `
    <div class="character">🐰</div>
    <h3>For ${nama} ♡</h3>
    <p>Click here to open your little message!</p>
`;

note.addEventListener("click", openMessage);
notesContainer.appendChild(note);


// MEMBUKA PESAN
function openMessage() {
    document.getElementById("modalCharacter").innerHTML = "🐰💗";
    document.getElementById("modalName").innerText = `Dear ${nama} ♡`;
    document.getElementById("modalMessage").innerText = pesan;
    document.getElementById("modal").style.display = "flex";
}

// MENUTUP PESAN
function closeMessage() {
    document.getElementById("modal").style.display = "none";
}

// KEMBALI KE MENU
function backToMenu() {
    document.getElementById("modal").style.display = "none";
}

// KODE RAHASIA
function checkCode() {
    const input = document.getElementById("secretCode").value.trim();

    if (input.toUpperCase() === kodeRahasia) {
        document.getElementById("mainContent").style.display = "block";
        document.getElementById("lockScreen").style.display = "none";
    } else {
        document.getElementById("errorMessage").innerText =
            "Eitsss, kode rahasianya salah! Coba lagi yaa ♡";

        document.getElementById("secretCode").value = "";
    }
}

// TEKAN ENTER UNTUK MEMASUKKAN KODE
document.getElementById("secretCode").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkCode();
    }
});


function playWithSound() {
  const video = document.querySelector("video");
  const tombol = document.querySelector(".sound-button");

  if (video.muted) {
    video.muted = false;
    video.play();
    tombol.textContent = "♡ Matikan Suara ♡";
  } else {
    video.muted = true;
    tombol.textContent = "♡ Putar dengan Suara ♡";
  }
}

// MUSIK BACKGROUND
function toggleMusic() {
    const music = document.getElementById("backgroundMusic");
    const button = document.querySelector(".music-button");

    if (music.paused) {
        music.play()
            .then(() => {
                button.innerHTML = "♫ Matikan Musik ♡";
            })
            .catch(error => {
                alert("Musik belum bisa diputar. Coba lagi yaa!");
            });
    } else {
        music.pause();
        button.innerHTML = "♡ Putar Musik ♡";
    }
}

window.toggleMusic = toggleMusic;
window.playWithSound = playWithSound;
window.checkCode = checkCode;
window.closeMessage = closeMessage;
window.backToMenu = backToMenu;
