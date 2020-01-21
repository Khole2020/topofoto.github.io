


var miTitulo = document.querySelector('h1');
miTitulo.innerHTML = 'Hello world!';




var miImage = document.querySelector('img');

miImage.onclick = function () {
    var miSrc = miImage.getAttribute('src');
    if (miSrc === 'Images/500_333.jpg') {
      miImage.setAttribute('src','Images/Portada_Post.png');
    } else {
      miImage.setAttribute('src', 'Images/500_333.jpg');
    }
};


var miBoton = document.querySelector('button');
var miTitulo = document.querySelector( 'h1');


function estableceNombreUsuario() {
    var miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Bienvenido en TopoFoto, ' + miNombre;
};

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    var nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Bienvenido en TopoFoto, ' + nombreAlmacenado;
};

miBoton.onclick = function() {
    estableceNombreUsuario();
};