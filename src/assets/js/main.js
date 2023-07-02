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
        let fileElement = `<p> ${e.target.files[0].name} </p> <i class="fa fa-sheet-plastic fa-lg"></i>`;
        if (e.target.files[0]) {


            wrapper.innerHTML = fileElement;
            console.log("🚀 ~ file: main.js:23 ~ wrapper:", wrapper)
        }
    });

    const input = document.getElementById('file-field');
    const output = document.getElementById('file-name');

    output.textContent = input.files[0].name;
}

const removeFile = () => {
    document.getElementById('file-field').value = '';

}

const resetForm = () => {

    let form = document.getElementById('contact-form');
    form.reset();
}
