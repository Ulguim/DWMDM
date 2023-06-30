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
        document.querySelector('#fileName').innerHTML = '';
        if (e.target.files[0]) {
            var fileNameElement = document.createElement('p');
            fileNameElement.textContent = e.target.files[0].name;

            document.querySelector('#fileName').appendChild(fileNameElement);
        }
    });

    const input = document.getElementById('file-field');
    const output = document.getElementById('file-name');

    output.textContent = input.files[0].name;
}


const resetForm = () => {

    let form = document.getElementById('contact-form');
    form.reset();
}
