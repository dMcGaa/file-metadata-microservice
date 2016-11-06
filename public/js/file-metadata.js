if (typeof document !== 'undefined') {
    var form = document.forms["filemetadata"];
    // document.getElementById("file-input").addEventListener("click", chooseFileButtonClick);
    // form.addEventListener('submit', uploadButtonClick);
    // document.getElementById("button-upload").addEventListener("click", formDataUpTest);
    document.getElementById("button-upload").addEventListener("click", uploadButtonClick);
    document.getElementById("change-content").addEventListener("click", loadDoc);
    document.getElementById('file-input').addEventListener('change', chooseFileButtonClick, false);
    var file;
}

function chooseFileButtonClick(e) {
    // alert("choose file clicked");
    file = e.target.files[0];
    if (!file) {
        console.log('no file');
        return;
    }
    var reader = new FileReader();
    reader.onloadend = () => {
        console.log("reader finished", JSON.stringify(reader.result));
    };
    reader.onload = function(event) {
        console.log("reader success", event.target.result);
    };
    // reader.readAsText(file);
    form.append('upload', reader.readAsBinaryString(file));
    // either attach the data back to the FormObject, or put the form data global
}

function formDataUpTest() {
    // var formElement = document.querySelector("form");
    var formData = new FormData();
    var request = new XMLHttpRequest();
    request.open("POST", "upload");
    formData.append("serialnumber", 1234432);
    console.log('sending', formData);
    request.send(formData);
}

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("POST", "upload", true);
  xhttp.send();
}

function uploadButtonClick() {
    // var form = document.forms["filemetadata"];
    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();
    // xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    formData.append("CustomField", "This is some extra data");
    formData.append('file', file);
    console.log("Form Data Entries: ");
    for(var pair of formData.entries()) {
       console.log(pair[0]+ ', '+ pair[1]); 
    }
    console.log("readyState", xhr.readyState);
    if(xhr.readyState == 0 || xhr.readyState == 4){
        xhr.open("POST", 'somefile', true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                console.log('status 200');
                console.log(xhr.responseText);
                var info = JSON.parse(xhr.responseText)
                var alertStr = String.prototype.concat("Upload successful!\nFile: ", info.originalname, "\nSize: ", info.size, " bytes." )
                alert(alertStr);
            }
        };
        console.log("sending", formData);
        xhr.send(formData);    
    }
    else {
        setTimeout('process()', 1000);
    }
    // xhr.onload = function() {
    //     if (xhr.status == 200) {
    //         alert("choose file clicked");
    //     }
    //     else {
    //         alert("Error " + xhr.status + " occurred when trying to upload your file.");
    //     }
    // };
    
    // xhr.send(null);
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
