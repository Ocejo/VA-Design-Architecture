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
        createElement(5, 1);
        $('#modalproyectos').modal('show');
    });
    $("#proyect2").on('click', function(event) {
        createElement(1, 2);
        $('#modalproyectos').modal('show');
    });
    $("#proyect3").on('click', function(event) {
        createElement(5, 3);
        $('#modalproyectos').modal('show');
    });
    $("#proyect4").on('click', function(event) {

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

async function createElement(num, id) {
    await deleteElement(num);
    await addClassitem(num);
    let ol = document.getElementById('carousel-indicators');
    let divimg = document.getElementById('carousel-inner');
    for (let index = 0; index < num; index++) {
        if (index === 0) {
            ol.innerHTML += `<li data-target="#myCarousel" data-slide-to="${index}" class="active" id="li${index}"></li>`;
            document.getElementById(`imgproyect${index}`).src = `images/Proyecto${id}/img${index+1}.jpg`;
            $(`#divimgproyect${index}`).addClass("active");
            // divimg.innerHTML += `<div class="item active imgcarr" id="imgproyect${index}"><img src="images/Proyecto${id}/img${index+1}.jpg"></div>`
        } else {
            ol.innerHTML += `<li data-target="#myCarousel" data-slide-to="${index}" id="li${index}"></li>`;
            document.getElementById(`imgproyect${index}`).src = `images/Proyecto${id}/img${index+1}.jpg`;
            // divimg.innerHTML += `<div class="item active imgcarr" id="imgproyect${index}"><img src="images/Proyecto${id}/img${index+1}.jpg"></div>`
        }
    }
}

function deleteElement(num) {
    let test = 5 - num;
    test = 5 - test;
    const padre = $("#carousel-indicators").children().length;
    const padred = $("#carousel-inner").children().length;
    if (padre > 0) {
        for (let index = 0; index < parseInt(padre); index++) {
            document.getElementById(`li${index}`).remove();
            if (num != 5 && index >= test) {
                console.log('eliminar');
                //document.getElementById(`divimgproyect${index}`).style.display = 'none';
                $(`#divimgproyect${index}`).removeClass("item");
            }
        }
    }
    return true;
}

function addClassitem(num) {
    for (let index = 0; index < num; index++) {
        if (!document.querySelector(`#divimgproyect${index}.item`)) {
            $(`#divimgproyect${index}`).addClass("item");
        }
    }
    return true;
}