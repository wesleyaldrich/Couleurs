document.getElementById('uploadForm').onsubmit = function(event) {
    event.preventDefault();
    const formData = new FormData(this);

    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        const preview = document.getElementById('preview');
        const colorizedImage = document.getElementById('colorizedImage');
        const downloadLink = document.getElementById('downloadLink');

        colorizedImage.src = data;
        downloadLink.href = data;
        preview.style.display = 'block';
    })
    .catch(error => console.error('Error:', error));
}
