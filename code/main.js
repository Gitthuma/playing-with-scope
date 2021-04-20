let x = 1;

/*Calling output(y and z) from inside a() and b()*/

/*Calling output(x) from inside a() and b()*/

/*Calling output(z and y) from inside a() and b()*/

function a() {
    let y = 2;
    output(z);
}

function b() {
    let z = 3;
    output(y);
}

function output(value) {
    const para = document.createElement('p');
    document.body.appendChild(para);
    para.textContent = 'Value: ' + value;
}