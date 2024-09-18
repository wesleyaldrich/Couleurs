function slide(){
    let slideValue = document.getElementById("color-slider").value;
    document.getElementById("gallery-img-2").style.clipPath = "polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)";
}

document.getElementById('upload-form').onsubmit = async function(event) {
    event.preventDefault();
    let loadingAnimation = document.getElementById('loading-animation');
    let loadingLayer = document.getElementById('loading-layer');
    loadingAnimation.style.display = 'block';
    loadingLayer.style.display = 'block';

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
    loadingAnimation.style.display = 'none';
    loadingLayer.style.display = 'none';
};

document.getElementById('file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        let reader = new FileReader();
        let previewImage = document.getElementById('preview-image');

        reader.onload = function(e) {
            
            previewImage.src = e.target.result;
            previewImage.classList.add('uploaded');
        };

        reader.readAsDataURL(file);
    }
});

document.getElementById("refresh-link").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.reload(); 
});
