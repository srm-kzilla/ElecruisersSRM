function openDrawer() {
    const drawer = document.querySelector(".kz-drawer")
    if (!drawer.classList.contains('active')) {
        drawer.classList.add('active')
    }
}

function closeDrawer() {
    const drawer = document.querySelector(".kz-drawer")
    if (drawer.classList.contains('active')) {
        drawer.classList.remove('active')
    }
}