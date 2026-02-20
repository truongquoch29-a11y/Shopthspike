function showPopup() {
    const popup = document.getElementById("welcomeOverlay");
    if (popup) popup.style.display = "flex";
}

function closePopup() {
    const popup = document.getElementById("welcomeOverlay");
    if (popup) popup.style.display = "none";
}

function hideFor2Hours() {
    const expireTime = Date.now() + 2 * 60 * 60 * 1000;
    localStorage.setItem("hidePopupUntil", expireTime);
    closePopup();
}

window.addEventListener("load", function() {
    const hideUntil = localStorage.getItem("hidePopupUntil");
    if (!hideUntil || Date.now() > hideUntil) {
        setTimeout(showPopup, 300);
    }
});
