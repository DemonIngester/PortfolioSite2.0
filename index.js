const NavOpen = () => {
        document.getElementById("MenuOpenButton").style.display = "none";
        document.getElementById("MenuCloseButton").style.display = "flex";
        document.getElementById("NavEOne").style.display = "flex";
        document.getElementById("NavETwo").style.display = "flex";
        document.getElementById("NavEThree").style.display = "flex";
}

const NavClose = () => {
        document.getElementById("MenuOpenButton").style.display = "flex";
        document.getElementById("MenuCloseButton").style.display = "none";
        document.getElementById("NavEOne").style.display = "none";
        document.getElementById("NavETwo").style.display = "none";
        document.getElementById("NavEThree").style.display = "none";
}

const GitHub = () => {
        window.open("https://github.com/DemonIngester", '_blank');
}

