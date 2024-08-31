document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl);
});

let removeBtn;

document.querySelectorAll('.btn-remove').forEach(function(button) {
    button.addEventListener('click', function() {
        removeBtn = button;
        var modal = new bootstrap.Modal(document.getElementById('confirmModal'));
        modal.show();
    });
});

document.getElementById('confirmRemove').addEventListener('click', function() {
    var row = removeBtn.closest('tr');
    row.remove();
    var modal = bootstrap.Modal.getInstance(document.getElementById('confirmModal'));
    modal.hide();
});

document.getElementById('saveProductBtn').addEventListener('click', function() {
    var productName = document.getElementById('productName').value;
    var productPrice = document.getElementById('productPrice').value;
    var productCategory = document.getElementById('productCategory').value;
    var productStatus = document.getElementById('productStatus').value;

    if (productName && productPrice && productCategory && productStatus) {
        var table = document.getElementById('productTable').getElementsByTagName('tbody')[0];
        var newRow = table.insertRow();

        newRow.insertCell(0).textContent = table.rows.length;
        newRow.insertCell(1).textContent = productName;
        newRow.insertCell(2).textContent = productStatus;
        newRow.insertCell(3).innerHTML = '<button class="btn btn-danger btn-sm btn-remove"><i class="fas fa-trash"></i></button>';

        newRow.querySelector('.btn-remove').addEventListener('click', function() {
            removeBtn = this;
            var modal = new bootstrap.Modal(document.getElementById('confirmModal'));
            modal.show();
        });

        document.getElementById('newProductForm').reset();

        var modal = bootstrap.Modal.getInstance(document.getElementById('newProductModal'));
        modal.hide();
    }
});
