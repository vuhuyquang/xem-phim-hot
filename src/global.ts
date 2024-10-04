export function preventInspect() {
  document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
  });

  document.addEventListener("keydown", function (event) {
    if (
      event.keyCode === 123 ||
      (event.ctrlKey && event.shiftKey && event.keyCode === 73)
    ) {
      event.preventDefault();
    }

    if (
      (event.ctrlKey && event.shiftKey && event.keyCode === 73) ||
      (event.ctrlKey && event.shiftKey && event.keyCode === 74)
    ) {
      event.preventDefault();
    }
  });
}
