(() => {
  let draggingElem;

  function onDragStart() {
    draggingElem = this;
  }

  function onDragEnter(event) {
    event.preventDefault();
  }

  function onDragOver(event) {
    event.preventDefault();
  }
  function onDrop() {
    this.append(draggingElem);
    draggingElem = null;
  }

  function run() {
    const taskElems = Array.from(document.querySelectorAll(".task"));
    const dropZoneElems = Array.from(document.querySelectorAll(".drop-zone"));

    taskElems.forEach((taskElem) => {
      taskElem.addEventListener("dragstart", onDragStart);
    });

    dropZoneElems.forEach((dropZoneElem) => {
      dropZoneElem.addEventListener("drop", onDrop);
      dropZoneElem.addEventListener("dragover", onDragOver);
      dropZoneElem.addEventListener("dragenter", onDragEnter);
    });
  }

  run();
})();
