document.getElementById('upload-form').onsubmit = async function(event) {
    event.preventDefault();

    let formData = new FormData(this);
    let response = await fetch('/upload', {
        method: 'POST',
        body: formData
    });

    let imageUrl = await response.text();
    let previewContainer = document.getElementById('preview-container');
    let colorizedImage = document.getElementById('colorized-image');
    let downloadLink = document.getElementById('download-link');
    let uploadIcon = document.getElementById('upload-icon');

    colorizedImage.src = imageUrl;
    downloadLink.href = imageUrl;
    previewContainer.style.display = 'flex';
    uploadIcon.style.display = 'none';
};
