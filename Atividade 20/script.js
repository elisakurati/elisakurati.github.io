function toggleMenu() {
    const menu = document.getElementById('navbarMenu');
    menu.classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', function () {
    var openModalBtn = document.getElementById('openModalBtn');
    var closeModalBtn = document.getElementById('closeModalBtn');
    var modal = document.getElementById('loginModal');

    openModalBtn.addEventListener('click', function () {
        $('#loginModal').modal('show');
    });

    closeModalBtn.addEventListener('click', function () {
        $('#loginModal').modal('hide');
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            $('#loginModal').modal('hide');
        }
    });
});
