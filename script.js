function hello() {
    alert("hello")
}


function toggleHideSideBar() {
    let sideBar = document.getElementById("side-bar");
    sideBar.classList.toggle('hide');

    let launcher = document.getElementById("side-launcher");
    launcher.classList.toggle('hide');
}