var canvas = document.getElementById('miCanvas');
    var ctx = canvas.getContext('2d');

    // Crea una nueva imagen
    var imagen = new Image();
    
    // Define la ruta de la imagen
    imagen.src = 'foto1.jpg.jpeg'; // Reemplaza con la ruta de tu imagen

    // Espera a que la imagen se cargue antes de dibujarla en el canvas
    imagen.onload = function() {
        // Dibuja la imagen en el canvas
        ctx.drawImage(imagen, 0, 0, canvas.width, canvas.height);
    };

    