// Página de mapas: toca a música "Dudidam Mambo" em repetição.
const musica = document.getElementById("musica");
const avisoSom = document.getElementById("aviso-som");

function iniciarMusica() {
    return musica.play();
}

// Tenta tocar assim que a página abre.
iniciarMusica()
    .then(function () {
        avisoSom.hidden = true;
    })
    .catch(function () {
        // Alguns navegadores (principalmente no celular) bloqueiam som automático.
        // Nesse caso, mostramos um botão e tocamos no primeiro toque/clique.
        avisoSom.hidden = false;

        function aoInteragir() {
            iniciarMusica().then(function () {
                avisoSom.hidden = true;
            });
            document.removeEventListener("click", aoInteragir);
            document.removeEventListener("touchstart", aoInteragir);
            document.removeEventListener("keydown", aoInteragir);
        }

        document.addEventListener("click", aoInteragir);
        document.addEventListener("touchstart", aoInteragir);
        document.addEventListener("keydown", aoInteragir);
    });