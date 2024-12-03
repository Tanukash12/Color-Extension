document.getElementById('applyColor').addEventListener('click', function () {
    const color = document.getElementById('colorPicker').value;
    document.body.style.backgroundColor = color;
    alert('Color Applied!');
});
