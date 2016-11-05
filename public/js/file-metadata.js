if (typeof document !== 'undefined') {
    var form = document.forms["filemetadata"];
    document.getElementById("choose-file").addEventListener("click", chooseFileButtonClick);
    form.addEventListener('submit', uploadButtonClick);
}

function chooseFileButtonClick() {
    alert("choose file clicked");
}

function uploadButtonClick() {
    alert("upload clicked");
    // document.getElementById("filemetadata").submit();
}

//nodeJS
if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = {
            chooseFileButtonClick,
            uploadButtonClick
        }
    }
}
