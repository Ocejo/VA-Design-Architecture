$(document).ready(function() {
    // data modales servicios
    $("#diseneo").on('click', function(event) {
        document.getElementById('title').innerText = 'Diseño Arquitectónico';
        document.getElementById('imgmodal').src = 'images/modal/diseneo.png';
        document.getElementById('article').innerText = 'Realización de proyecto arquitectónico, contenido en planos, fachadas, perspectivas fotorrealistas representativas del proyecto, en carácter personalizado a los gustos y presupuesto del cliente.';
        $('#exampleModal').modal('show');
    });
    $("#construccion").on('click', function(event) {
        document.getElementById('title').innerText = 'Construcción';
        document.getElementById('imgmodal').src = 'images/modal/construccion.jpg';
        document.getElementById('article').innerText = 'Basados en el proyecto arquitectónico, ofrecemos administración, supervisión, vigilancia, coordinación de materiales equipos y personal capacitado para la ejecución de cada obra.';
        $('#exampleModal').modal('show');
    });
    $("#remodelacioon").on('click', function(event) {
        document.getElementById('title').innerText = 'Remodelación';
        document.getElementById('imgmodal').src = 'images/modal/remodelacion.jpg';
        document.getElementById('article').innerText = 'Abarcamos proyectos para ampliaciones, adecuaciones, restauraciones, mantenimiento, acabados en pisos, carpintería, cancelería, herrería, elementos prefabricados así como aplicaciones de pastas y pinturas.';
        $('#exampleModal').modal('show');
    });
    // data modales proyectos
    $('#myCarousel').carousel({
        interval: 3000
    })
    $("#proyect1").on('click', function(event) {
        createImg(1);
        $('#modalproyectos').modal('show');
    });
    $("#proyect2").on('click', function(event) {
        createImg(2);
        $('#modalproyectos').modal('show');
    });
    $("#proyect3").on('click', function(event) {
        createImg(3);
        $('#modalproyectos').modal('show');
    });
    $("#proyect4").on('click', function(event) {
        createImg(4);
        $('#modalproyectos').modal('show');
    });
    // Eventos Cerrar modales
    $("#closemodalp").on('click', function(event) {
        $('#modalproyectos').modal('hide');
    });
    $("#closemodal").on('click', function(event) {
        $('#exampleModal').modal('hide');
    });
});

function createImg(id) {
    for (let index = 1; index < 6; index++) {
        document.getElementById('imgproyect' + index).src = `images/Proyecto${id}/img${index}.jpg`;
    }
    return;
}