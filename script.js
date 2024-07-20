
    function sim() {
        alert("Te amo muito, minha vidoca. Você e eu pra sempre!");
        // redireciona para um URL após clicar no SIM
        location.href = "https://youtu.be/A42ERJlitLE?si=nFJ3-4isjLGjo7DN";
    }

    function desvia(btn) {
        // btn declarado na função
        btn.style.position = 'absolute';
        btn.style.bottom = geraPosicao(10, 90);
        btn.style.left = geraPosicao(10, 90);
        console.log('opa, desviei...');
    }

    function geraPosicao(min, max) {
        return (Math.random() * (max - min) + min) + "%";
    }

