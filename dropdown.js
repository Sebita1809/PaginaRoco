function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
    const flecha = document.getElementById("flechaDropdown");
    if (flecha.src.includes('imagenes/flechaAbajo.png')) {
        flecha.src = 'imagenes/flechaArriba.png';
    } else {
        flecha.src = 'imagenes/flechaAbajo.png';
    }
}
// Cierra el dropdown si el usuario hace clic fuera de él
window.onclick = function(event) {
    if (!event.target.matches('.dropDownPerfil button img')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                document.getElementById("flechaDropdown").src = 'imagenes/flechaAbajo.png';
                openDropdown.classList.remove('show');
            }
        }
    }
}