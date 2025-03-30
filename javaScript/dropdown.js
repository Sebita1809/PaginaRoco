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
    } else{
        input.value = (valorDefault + 1) / 10; // Incrementa el valor
    }
});
document.querySelector('.decrement').addEventListener('click', function() {
    const input = document.querySelector('input[type="number"]');
    const valorDefault = input.value * 10 || 0
    if(valorDefault == 0){
        input.value = 0
    } else{
        input.value = (valorDefault - 1) / 10; // Incrementa el valor
    }
});