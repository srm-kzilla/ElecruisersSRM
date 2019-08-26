function openDrawer() {
    const drawer = document.querySelector(".kz-drawer")
    if (!drawer.classList.contains('active')) {
        drawer.classList.add('active')
    }
    document.querySelector(".team-name").style.marginTop = "80px";
    console.log("Went down");
}

function closeDrawer() {
    const drawer = document.querySelector(".kz-drawer")
    if (drawer.classList.contains('active')) {
        drawer.classList.remove('active')
    }
    document.querySelector(".team-name").style.marginTop = "5px";
    console.log("Went up");
}