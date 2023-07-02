function handleTopnav() {
    var x = document.getElementById("topNav");

    if (x.className === "topNav") {

        x.className = "hideNav";
    } else {

        x.className = "topNav";
    }
}


const showFileName = () => {
    let button = document.getElementById('file');
    document.getElementById('file-field').addEventListener('change', function (e) {
        // document.querySelector('#fileName').innerHTML = '';
        let wrapper = document.getElementById('fileName');
        let fileElement = `<p> ${e.target.files[0].name}  <i onclick="removeFile()" class="fa-solid fa-circle-xmark"></i> </p>`;
        if (e.target.files[0]) {
            wrapper.innerHTML = fileElement;
        }
    });

    const input = document.getElementById('file-field');
    const output = document.getElementById('file-name');

    output.textContent = input.files[0].name;
}

const removeFile = () => {
 
   let x = document.getElementById('file-field');
    x.value = '';
    x.files = null;
    let wrapper = document.getElementById('fileName');
    wrapper.innerHTML = '';
}

const resetForm = () => {

    let form = document.getElementById('contact-form');
    form.reset();
}
