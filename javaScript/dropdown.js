function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
    const flecha = document.getElementById("flechaDropdown");
}
// Cierra el dropdown si el usuario hace clic fuera de él
window.onclick = function(event) {
    if (!event.target.matches('.home button img')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}



document.querySelector('.increment').addEventListener('click', function() {
    const input = document.querySelector('input[type="number"]');
    const valorDefault = input.value * 10 || 0
    if(input.value >= 3){
        input.value = 3
    }else if(input.value < 0){
        input.value = null
    } else{
        input.value = (valorDefault + 1) / 10; // Incrementa el valor
    }
});
document.querySelector('.decrement').addEventListener('click', function() {
    const input = document.querySelector('input[type="number"]');
    const valorDefault = input.value * 10 || 0
    if(input.value <= 0){
        input.value = null
    } else if(input.value > 3){
        input.value = 3
    } else {
        input.value = (valorDefault - 1) / 10; // Incrementa el valor
    }
});
document.querySelector('.increment1').addEventListener('click', function() {
    const input = document.querySelector('.inputPeso');
    const valorDefault = parseInt(input.value) || 0
    if(input.value >= 300){
        input.value = 300
    }else if(input.value < 0){
        input.value = null
    } else{
        input.value = (valorDefault + 1); // Incrementa el valor
    }
});
document.querySelector('.decrement1').addEventListener('click', function() {
    const input = document.querySelector('.inputPeso');
    const valorDefault = parseInt(input.value) || 0
    if(input.value <= 0){
        input.value = null
    } else if(input.value > 300){
        input.value = 300
    } else {
        input.value = (valorDefault - 1); // Incrementa el valor
    }
});
document.querySelector('.increment2').addEventListener('click', function() {
    const input = document.querySelector('.inputEdad');
    const valorDefault = parseInt(input.value) || 0
    if(input.value >= 100){
        input.value = 100
    }else if(input.value < 0){
        input.value = null
    } else{
        input.value = (valorDefault + 1); // Incrementa el valor
    }
});
document.querySelector('.decrement2').addEventListener('click', function() {
    const input = document.querySelector('.inputEdad');
    const valorDefault = parseInt(input.value) || 0
    if(input.value <= 0){
        input.value = null
    } else if(input.value > 100){
        input.value = 100
    } else {
        input.value = (valorDefault - 1); // Incrementa el valor
    }
});

document.querySelector('.botonMasInfo').addEventListener('click', function() {
    const informacion = document.querySelector('.explicacionMacros');
    const imagenBoton = document.querySelector('.imagenBoton')
    const botonMasInfo = document.querySelector('.botonMasInfo')
    if (informacion.style.display == 'none'){
        informacion.style.display = 'flex'
        informacion.style.width = '58em'
        informacion.style.height = '22em'
        informacion.style.borderRadius = '20px'
        imagenBoton.style.transform = 'rotate(45deg)'
        botonMasInfo.style.animation = 'none'
    } else {
        informacion.style.display = 'none'
        informacion.style.width = '3em'
        informacion.style.heigth = '3em'
        imagenBoton.style.transform = 'none'
        botonMasInfo.style.animation = 'movimientoBoton 1s infinite ease-in-out alternate-reverse'
    }
})

