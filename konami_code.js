const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0;

function init(e) {
  document.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which);

    if (key === code[index]) {
      index++;

      if (index === code.length) {
        alert("Konami Code Found!");

        index = 0;
      }
    } else {
      index = 0;
    }
  })
  console.log(e.which); 
}

init()
