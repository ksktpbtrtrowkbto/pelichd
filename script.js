document.addEventListener('DOMContentLoaded', () => {
    const peliculas = [
        { titulo: "Película 1", anio: 2023 },
        { titulo: "Película 2", anio: 2023 },
        { titulo: "Película 3", anio: 2023 }
    ];

    const listaPeliculas = document.getElementById('peliculas-lista');

    peliculas.forEach(pelicula => {
        const div = document.createElement('div');
        div.className = 'pelicula';
        div.innerHTML = `<strong>${pelicula.titulo}</strong><br>Año: ${pelicula.anio}`;
        listaPeliculas.appendChild(div);
    });
});
