var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})

document.addEventListener('click', function (event) {
    var popoverIsOpen = popoverList.some(function (popover) {
        return popover._element.classList.contains('show');
    });

    if (popoverIsOpen) {
        popoverList.forEach(function (popover) {
            if (!popover._element.contains(event.target)) {
                popover.hide();
            }
        });
    }
});
