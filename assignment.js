let target = null;

window.addEventListener('DOMContentLoaded', setupEvents, false);

function setupEvents() {
  if(window.File && window.FileList && window.FileReader){
    target = document.getElementById('imgHolder');
    target.addEventListener('dragenter', dragEnter);
    target.addEventListener('dragover', dragOver);
    target.addEventListener('dragleave', dragLeave);
    target.addEventListener('drop', dropFile);
}
}

function dragEnter(evt) {
  evt.target.style.backgroundColor = "lightyellow";
  evt.preventDefault();
  evt.stopPropagation();
}

function dragOver(evt) {
  evt.preventDefault();
  evt.stopPropagation();
}

function dragLeave(evt){
  evt.target.style.backgroundColor = "black";
  evt.preventDefault();
  evt.stopPropagation();
}

function dropFile(evt) {
  evt.target.style.backgroundColor = "black";
  evt.preventDefault();
  evt.stopPropagation();

  let file = evt.dataTransfer.files;
  if (file.length > 0) handleFiles(file);
}

function handleFiles(fileArray){
  let reader = new FileReader();
  reader.addEventListener('load', handleReaderLoad);
  reader.readAsDataURL(fileArray[0]);
}

function handleReaderLoad(evt){
  let imgTag = document.getElementById('imgHolder');
  imgTag.src = evt.target.result;
}
