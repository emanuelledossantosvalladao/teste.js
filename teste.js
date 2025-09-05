// Comando fala_aí()
function fala_aí(texto) {
    console.log(texto);
}

// Comando se_mano (condicional tipo if)
function se_mano(condição, então) {
    if (condição) {
        então();
    }
}

// Comando repete_mano (loop tipo while)
function repete_mano(condição, ação) {
    while (condição()) {
        ação();
    }
}

// Comando merda() e bosta() (simula erro)
function merda() {
    fala_aí("😅, acho q não samos bons o suficiente, porém tenta de novo 💪");
}
const bosta = merda;

// Comando calma(segundos) (pausa com async/await)
function calma(segundos) {
    return new Promise(resolve => setTimeout(resolve, segundos * 1000));
}

// Comando diva_mode()
function diva_mode() {
    fala_aí("✨ Tudo sob controle, meu amor. Seu código tá um lacre! ✨");
}
 async function main() {
    fala_aí("Oi, eu sou o CodeZLang™ em JavaScript!");

    se_mano(3 > 2, () => fala_aí("3 é maior que 2, mano!"));

    let contador = 0;
    repete_mano(() => contador < 3, () => {
        fala_aí("Contando: " + contador);
        contador++;
    });

    fala_aí("Testando erro de propósito:");
    bosta();

    fala_aí("Esperando 2 segundos...");
    await calma(2);
    fala_aí("Voltei depois da pausa 😎");

    diva_mode();
}

main();

