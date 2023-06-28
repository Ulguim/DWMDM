function handleTopnav() {
    var x = document.getElementById("topNav");

    if (x.className === "topNav") {
        console.log('é');
        x.className = "hideNav";
    } else {
        console.log('não é');
        x.className = "topNav";
    }
}


const showFileName = () => {
    let button = document.getElementById('file');
    document.getElementById('file').addEventListener('change', function(e) {
        document.querySelector('#fileName').innerHTML = '';
        if (e.target.files[0]) {
          var fileNameElement = document.createElement('p');
          fileNameElement.textContent = e.target.files[0].name;
       
          document.querySelector('#fileName').appendChild(fileNameElement);
        }
      });
      
    const input = document.getElementById('file');
    const output = document.getElementById('file-name');

    output.textContent = input.files[0].name;
}


