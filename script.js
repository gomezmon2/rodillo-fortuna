// Configuración del juego
const palabras = [
    // Animales
    { palabra: "DINOSAURIO", categoria: "Animales" },
    { palabra: "MARIPOSA", categoria: "Animales" },
    { palabra: "ELEFANTE", categoria: "Animales" },
    { palabra: "TIBURÓN", categoria: "Animales" },
    { palabra: "JIRAFA", categoria: "Animales" },
    { palabra: "COCODRILO", categoria: "Animales" },
    { palabra: "PINGÜINO", categoria: "Animales" },
    { palabra: "CANGURO", categoria: "Animales" },
    { palabra: "RINOCERONTE", categoria: "Animales" },
    { palabra: "DELFÍN", categoria: "Animales" },
    { palabra: "MURCIÉLAGO", categoria: "Animales" },
    { palabra: "HIPOPÓTAMO", categoria: "Animales" },
    { palabra: "LEOPARDO", categoria: "Animales" },
    { palabra: "TORTUGA", categoria: "Animales" },
    { palabra: "BALLENA", categoria: "Animales" },

    // Profesiones
    { palabra: "ASTRONAUTA", categoria: "Profesiones" },
    { palabra: "BOMBERO", categoria: "Profesiones" },
    { palabra: "DOCTOR", categoria: "Profesiones" },
    { palabra: "MAESTRO", categoria: "Profesiones" },
    { palabra: "POLICÍA", categoria: "Profesiones" },
    { palabra: "COCINERO", categoria: "Profesiones" },
    { palabra: "VETERINARIO", categoria: "Profesiones" },
    { palabra: "PILOTO", categoria: "Profesiones" },
    { palabra: "CIENTÍFICO", categoria: "Profesiones" },
    { palabra: "MÚSICO", categoria: "Profesiones" },

    // Comida
    { palabra: "CHOCOLATE", categoria: "Comida" },
    { palabra: "PIZZA", categoria: "Comida" },
    { palabra: "HAMBURGUESA", categoria: "Comida" },
    { palabra: "ESPAGUETI", categoria: "Comida" },
    { palabra: "HELADO", categoria: "Comida" },
    { palabra: "GALLETA", categoria: "Comida" },
    { palabra: "SANDWICH", categoria: "Comida" },
    { palabra: "TARTA", categoria: "Comida" },
    { palabra: "CARAMELO", categoria: "Comida" },
    { palabra: "PANQUEQUE", categoria: "Comida" },

    // Transporte
    { palabra: "BICICLETA", categoria: "Transporte" },
    { palabra: "HELICÓPTERO", categoria: "Transporte" },
    { palabra: "MOTOCICLETA", categoria: "Transporte" },
    { palabra: "SUBMARINO", categoria: "Transporte" },
    { palabra: "COHETE", categoria: "Transporte" },
    { palabra: "CAMIÓN", categoria: "Transporte" },
    { palabra: "AVIÓN", categoria: "Transporte" },
    { palabra: "TREN", categoria: "Transporte" },
    { palabra: "BARCO", categoria: "Transporte" },
    { palabra: "GLOBO", categoria: "Transporte" },

    // Tecnología
    { palabra: "COMPUTADORA", categoria: "Tecnología" },
    { palabra: "TELÉFONO", categoria: "Tecnología" },
    { palabra: "TABLET", categoria: "Tecnología" },
    { palabra: "ROBOT", categoria: "Tecnología" },
    { palabra: "VIDEOJUEGO", categoria: "Tecnología" },
    { palabra: "CÁMARA", categoria: "Tecnología" },
    { palabra: "TELEVISOR", categoria: "Tecnología" },
    { palabra: "AURICULARES", categoria: "Tecnología" },

    // Personajes
    { palabra: "SUPERHÉROE", categoria: "Personajes" },
    { palabra: "PRINCESA", categoria: "Personajes" },
    { palabra: "PIRATA", categoria: "Personajes" },
    { palabra: "MAGO", categoria: "Personajes" },
    { palabra: "NINJA", categoria: "Personajes" },
    { palabra: "CABALLERO", categoria: "Personajes" },
    { palabra: "HADA", categoria: "Personajes" },
    { palabra: "VAMPIRO", categoria: "Personajes" },
    { palabra: "PAYASO", categoria: "Personajes" },
    { palabra: "DETECTIVE", categoria: "Personajes" },

    // Naturaleza
    { palabra: "ARCOÍRIS", categoria: "Naturaleza" },
    { palabra: "MONTAÑA", categoria: "Naturaleza" },
    { palabra: "VOLCÁN", categoria: "Naturaleza" },
    { palabra: "CASCADA", categoria: "Naturaleza" },
    { palabra: "OCÉANO", categoria: "Naturaleza" },
    { palabra: "BOSQUE", categoria: "Naturaleza" },
    { palabra: "DESIERTO", categoria: "Naturaleza" },
    { palabra: "ESTRELLA", categoria: "Naturaleza" },
    { palabra: "RELÁMPAGO", categoria: "Naturaleza" },
    { palabra: "TORNADO", categoria: "Naturaleza" },

    // Frutas
    { palabra: "MANZANA", categoria: "Frutas" },
    { palabra: "SANDÍA", categoria: "Frutas" },
    { palabra: "PIÑA", categoria: "Frutas" },
    { palabra: "FRESA", categoria: "Frutas" },
    { palabra: "PLÁTANO", categoria: "Frutas" },
    { palabra: "NARANJA", categoria: "Frutas" },
    { palabra: "CEREZA", categoria: "Frutas" },
    { palabra: "MANGO", categoria: "Frutas" },
    { palabra: "DURAZNO", categoria: "Frutas" },
    { palabra: "FRAMBUESA", categoria: "Frutas" },

    // Fantasía
    { palabra: "UNICORNIO", categoria: "Fantasía" },
    { palabra: "DRAGÓN", categoria: "Fantasía" },
    { palabra: "SIRENA", categoria: "Fantasía" },
    { palabra: "CENTAURO", categoria: "Fantasía" },
    { palabra: "FÉNIX", categoria: "Fantasía" },
    { palabra: "GRIFO", categoria: "Fantasía" },
    { palabra: "PEGASO", categoria: "Fantasía" },
    { palabra: "TROLL", categoria: "Fantasía" },

    // Instrumentos
    { palabra: "GUITARRA", categoria: "Instrumentos" },
    { palabra: "PIANO", categoria: "Instrumentos" },
    { palabra: "TAMBOR", categoria: "Instrumentos" },
    { palabra: "TROMPETA", categoria: "Instrumentos" },
    { palabra: "VIOLÍN", categoria: "Instrumentos" },
    { palabra: "FLAUTA", categoria: "Instrumentos" },
    { palabra: "SAXOFÓN", categoria: "Instrumentos" },
    { palabra: "BATERÍA", categoria: "Instrumentos" },

    // Lugares
    { palabra: "CASTILLO", categoria: "Lugares" },
    { palabra: "PIRAMIDE", categoria: "Lugares" },
    { palabra: "MUSEO", categoria: "Lugares" },
    { palabra: "PARQUE", categoria: "Lugares" },
    { palabra: "BIBLIOTECA", categoria: "Lugares" },
    { palabra: "ESTADIO", categoria: "Lugares" },
    { palabra: "HOSPITAL", categoria: "Lugares" },
    { palabra: "ESCUELA", categoria: "Lugares" },
    { palabra: "ZOOLÓGICO", categoria: "Lugares" },
    { palabra: "CIRCO", categoria: "Lugares" },

    // Deportes
    { palabra: "FÚTBOL", categoria: "Deportes" },
    { palabra: "BALONCESTO", categoria: "Deportes" },
    { palabra: "NATACIÓN", categoria: "Deportes" },
    { palabra: "TENIS", categoria: "Deportes" },
    { palabra: "GIMNASIA", categoria: "Deportes" },
    { palabra: "BÉISBOL", categoria: "Deportes" },
    { palabra: "ATLETISMO", categoria: "Deportes" },
    { palabra: "VOLEIBOL", categoria: "Deportes" },

    // Juguetes
    { palabra: "PELOTA", categoria: "Juguetes" },
    { palabra: "MUÑECA", categoria: "Juguetes" },
    { palabra: "ROMPECABEZAS", categoria: "Juguetes" },
    { palabra: "COLUMPIO", categoria: "Juguetes" },
    { palabra: "PATINETA", categoria: "Juguetes" },
    { palabra: "COMETA", categoria: "Juguetes" },
    { palabra: "TROMPO", categoria: "Juguetes" },
    { palabra: "YOYÓ", categoria: "Juguetes" }
];

const valoresSlot = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, "💀", "⏸️"];
const simbolosSlot = {
    100: "💯",
    200: "💰",
    300: "🎁",
    400: "⭐",
    500: "💎",
    600: "🏆",
    700: "🎯",
    800: "🔥",
    900: "⚡",
    1000: "👑",
    "💀": "💀",
    "⏸️": "⏸️"
};

let juegoActual = {
    palabraActual: "",
    categoria: "",
    letrasReveladas: new Set(),
    letrasIntentadas: new Set(),
    valorActualSlot: 0,
    girando: false,
    jugadores: [],
    turnoActual: 0,
    numeroJugadores: 2,
    juegoIniciado: false,
    palabrasJugadas: 0,
    multiplicadorPuntos: 1,
    palabraFinal: false
};

let girando = false;

// Inicializar el rodillo
function inicializarRodillo() {
    const reel = document.getElementById('reel');
    reel.innerHTML = '';

    // Crear items para el rodillo (duplicados para efecto continuo)
    for (let i = 0; i < 3; i++) {
        valoresSlot.forEach(valor => {
            const item = document.createElement('div');
            item.className = 'slot-item-single';

            const emoji = document.createElement('div');
            emoji.className = 'emoji';
            emoji.textContent = simbolosSlot[valor];

            const valueText = document.createElement('div');
            valueText.className = 'value';
            valueText.textContent = typeof valor === 'number' ? valor : '';

            item.appendChild(emoji);
            item.appendChild(valueText);
            reel.appendChild(item);
        });
    }
}

// Girar el rodillo
function girarSlots() {
    if (girando) return;

    girando = true;
    juegoActual.girando = true;
    document.getElementById('spinBtn').disabled = true;

    const reel = document.getElementById('reel');
    const duracion = 3000;
    const inicio = Date.now();

    // Seleccionar valor final aleatorio
    const valorFinal = valoresSlot[Math.floor(Math.random() * valoresSlot.length)];
    const indiceFinal = valoresSlot.indexOf(valorFinal);

    function animarRodillo() {
        const ahora = Date.now();
        const transcurrido = ahora - inicio;
        const progreso = Math.min(transcurrido / duracion, 1);

        if (progreso < 1) {
            // Animación de giro rápido
            const offset = Math.floor(progreso * valoresSlot.length * 8) * 140;
            reel.style.top = `-${offset % (valoresSlot.length * 140)}px`;
            requestAnimationFrame(animarRodillo);
        } else {
            // Posición final exacta
            reel.style.top = `-${(valoresSlot.length + indiceFinal) * 140}px`;

            setTimeout(() => {
                determinarResultado(valorFinal);
                girando = false;
                juegoActual.girando = false;
                document.getElementById('spinBtn').disabled = false;
            }, 500);
        }
    }

    animarRodillo();
}

// Determinar el resultado
function determinarResultado(valor) {
    const jugadorActual = juegoActual.jugadores[juegoActual.turnoActual];

    // Verificar si hay quiebra
    if (valor === "💀") {
        jugadorActual.puntos = 0;
        juegoActual.valorActualSlot = 0;
        mostrarMensaje(`💀 ¡QUIEBRA! ${jugadorActual.nombre} perdió todos sus puntos`, 'error');
        actualizarPuntosJugador();
        setTimeout(() => cambiarTurno(), 2000);
        return;
    }

    // Verificar si hay pierde turno
    if (valor === "⏸️") {
        juegoActual.valorActualSlot = 0;
        mostrarMensaje(`⏸️ ${jugadorActual.nombre} pierde el turno`, 'info');
        setTimeout(() => cambiarTurno(), 2000);
        return;
    }

    // Establecer el valor
    juegoActual.valorActualSlot = valor;
    mostrarMensaje(`${simbolosSlot[valor]} ¡${jugadorActual.nombre} conseguiste ${valor} puntos! 🎰`, 'success');
}

// Inicializar jugadores
function inicializarJugadores(numJugadores) {
    juegoActual.jugadores = [];
    juegoActual.numeroJugadores = numJugadores;
    juegoActual.turnoActual = 0;

    for (let i = 0; i < numJugadores; i++) {
        juegoActual.jugadores.push({
            nombre: `Jugador ${i + 1}`,
            puntos: 0
        });
    }

    mostrarJugadores();
}

// Mostrar tarjetas de jugadores
function mostrarJugadores() {
    const container = document.getElementById('playersInfo');
    container.innerHTML = '';

    juegoActual.jugadores.forEach((jugador, index) => {
        const card = document.createElement('div');
        card.className = 'player-card';
        card.id = `player-${index}`;
        if (index === juegoActual.turnoActual) {
            card.classList.add('active');
        }

        card.innerHTML = `
            <h3>${jugador.nombre}</h3>
            <div class="points">${jugador.puntos} pts</div>
        `;

        container.appendChild(card);
    });

    actualizarTurnoActual();
}

// Actualizar indicador de turno
function actualizarTurnoActual() {
    const jugadorActual = juegoActual.jugadores[juegoActual.turnoActual];
    document.getElementById('currentPlayer').textContent = jugadorActual.nombre;

    // Actualizar clases activas
    juegoActual.jugadores.forEach((_, index) => {
        const card = document.getElementById(`player-${index}`);
        if (card) {
            if (index === juegoActual.turnoActual) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        }
    });
}

// Cambiar turno al siguiente jugador
function cambiarTurno() {
    juegoActual.turnoActual = (juegoActual.turnoActual + 1) % juegoActual.numeroJugadores;
    juegoActual.valorActualSlot = 0;
    actualizarTurnoActual();
}

// Actualizar puntos del jugador actual
function actualizarPuntosJugador() {
    const jugador = juegoActual.jugadores[juegoActual.turnoActual];
    const card = document.getElementById(`player-${juegoActual.turnoActual}`);
    if (card) {
        const pointsDiv = card.querySelector('.points');
        pointsDiv.textContent = `${jugador.puntos} pts`;
    }
}

// Iniciar el juego
function iniciarJuego() {
    const numJugadores = parseInt(document.getElementById('numPlayers').value);
    inicializarJugadores(numJugadores);
    juegoActual.juegoIniciado = true;

    // Ocultar configuración
    document.querySelector('.player-setup').style.display = 'none';

    nuevoJuego();
}

// Iniciar nueva partida completa
function nuevaPartida() {
    juegoActual.palabrasJugadas = 0;
    juegoActual.multiplicadorPuntos = 1;
    juegoActual.palabraFinal = false;
    juegoActual.turnoActual = 0;

    // Resetear puntos de todos los jugadores
    juegoActual.jugadores.forEach(jugador => jugador.puntos = 0);

    nuevaPalabra();
}

// Nueva palabra (mantiene puntos acumulados)
function nuevaPalabra() {
    const palabraAleatoria = palabras[Math.floor(Math.random() * palabras.length)];
    juegoActual.palabraActual = palabraAleatoria.palabra.toUpperCase();
    juegoActual.categoria = palabraAleatoria.categoria;
    juegoActual.letrasReveladas.clear();
    juegoActual.letrasIntentadas.clear();
    juegoActual.valorActualSlot = 0;

    // Verificar si es la palabra final (cada 4 palabras)
    if (juegoActual.palabrasJugadas === 4) {
        juegoActual.multiplicadorPuntos = 2;
        juegoActual.palabraFinal = true;
        document.getElementById('category').textContent = `${juegoActual.categoria} ⭐ ¡PALABRA FINAL - DOBLE PUNTOS!`;
    } else {
        juegoActual.multiplicadorPuntos = 1;
        juegoActual.palabraFinal = false;
        document.getElementById('category').textContent = `${juegoActual.categoria} (Palabra ${juegoActual.palabrasJugadas + 1}/5)`;
    }

    document.getElementById('message').textContent = '';
    document.getElementById('message').className = 'message';
    document.getElementById('guessedLetters').textContent = '';
    document.getElementById('letterInput').value = '';
    document.getElementById('wordInput').value = '';

    mostrarPalabra();
    mostrarJugadores();
}

// Llamar desde botón "Nueva Palabra" (reinicia partida completa)
function nuevoJuego() {
    nuevaPartida();
}

// Mostrar la palabra con letras ocultas
function mostrarPalabra() {
    const container = document.getElementById('wordContainer');
    container.innerHTML = '';

    for (let letra of juegoActual.palabraActual) {
        const box = document.createElement('div');

        if (letra === ' ') {
            box.className = 'letter-box space';
        } else {
            box.className = 'letter-box';
            if (juegoActual.letrasReveladas.has(letra)) {
                box.textContent = letra;
                box.classList.add('revealed');
            }
        }

        container.appendChild(box);
    }
}

// Normalizar letra (quitar acentos)
function normalizarLetra(letra) {
    const mapaAcentos = {
        'Á': 'A', 'É': 'E', 'Í': 'I', 'Ó': 'O', 'Ú': 'U',
        'Ü': 'U', 'Ñ': 'Ñ'
    };
    return mapaAcentos[letra] || letra;
}

// Adivinar letra
function adivinarLetra() {
    if (juegoActual.girando) {
        mostrarMensaje('¡Espera a que la ruleta se detenga!', 'info');
        return;
    }

    if (juegoActual.valorActualSlot === 0) {
        mostrarMensaje('¡Primero debes girar la ruleta!', 'info');
        return;
    }

    if (juegoActual.valorActualSlot === "PIERDE TURNO") {
        mostrarMensaje('Perdiste el turno. Gira la ruleta nuevamente.', 'info');
        juegoActual.valorActualSlot = 0;
        return;
    }

    const input = document.getElementById('letterInput');
    const letra = input.value.toUpperCase();

    if (!letra || letra.length !== 1) {
        mostrarMensaje('Por favor, ingresa una letra', 'error');
        return;
    }

    if (juegoActual.letrasIntentadas.has(letra)) {
        const jugadorActual = juegoActual.jugadores[juegoActual.turnoActual];
        mostrarMensaje(`¡Letra repetida! ${jugadorActual.nombre} pierde el turno`, 'error');
        juegoActual.valorActualSlot = 0;
        input.value = '';
        setTimeout(() => cambiarTurno(), 2000);
        return;
    }

    juegoActual.letrasIntentadas.add(letra);
    actualizarLetrasIntentadas();

    let encontrada = false;
    let contador = 0;

    for (let char of juegoActual.palabraActual) {
        const charNormalizado = normalizarLetra(char);
        if (charNormalizado === letra) {
            juegoActual.letrasReveladas.add(char);
            encontrada = true;
            contador++;
        }
    }

    const jugadorActual = juegoActual.jugadores[juegoActual.turnoActual];

    if (encontrada) {
        const puntosPorLetra = juegoActual.valorActualSlot * contador * juegoActual.multiplicadorPuntos;
        jugadorActual.puntos += puntosPorLetra;

        let mensajeMultiplicador = juegoActual.multiplicadorPuntos > 1 ? ' (x2)' : '';
        mostrarMensaje(`¡Correcto! ${jugadorActual.nombre} +${puntosPorLetra} puntos${mensajeMultiplicador} 🎉`, 'success');
        actualizarPuntosJugador();
        mostrarPalabra();

        if (verificarVictoria()) {
            manejarVictoria(jugadorActual);
        }

        // No reseteamos el valor, puede seguir adivinando
    } else {
        mostrarMensaje(`La letra ${letra} no está en la palabra ❌ ${jugadorActual.nombre} pierde el turno`, 'error');
        // Reseteamos el valor y cambiamos de turno
        juegoActual.valorActualSlot = 0;
        setTimeout(() => cambiarTurno(), 2000);
    }

    input.value = '';
}

// Adivinar palabra completa
function adivinarPalabra() {
    const input = document.getElementById('wordInput');
    const palabra = input.value.toUpperCase().trim();
    const jugadorActual = juegoActual.jugadores[juegoActual.turnoActual];

    if (!palabra) {
        mostrarMensaje('Por favor, ingresa una palabra', 'error');
        return;
    }

    if (palabra === juegoActual.palabraActual) {
        for (let letra of juegoActual.palabraActual) {
            juegoActual.letrasReveladas.add(letra);
        }
        const bonusPuntos = 1000 * juegoActual.multiplicadorPuntos;
        jugadorActual.puntos += bonusPuntos;
        mostrarPalabra();
        actualizarPuntosJugador();

        let mensajeMultiplicador = juegoActual.multiplicadorPuntos > 1 ? ' (x2)' : '';
        mostrarMensaje(`🏆 ¡CORRECTO! ${jugadorActual.nombre} ganó ${bonusPuntos} puntos bonus${mensajeMultiplicador}! 🏆`, 'success');

        setTimeout(() => manejarVictoria(jugadorActual), 2000);
    } else {
        jugadorActual.puntos = Math.max(0, jugadorActual.puntos - 500);
        actualizarPuntosJugador();
        mostrarMensaje(`Palabra incorrecta. ${jugadorActual.nombre} -500 puntos ❌`, 'error');
        juegoActual.valorActualSlot = 0;
        setTimeout(() => cambiarTurno(), 2000);
    }

    input.value = '';
}

// Manejar victoria de una palabra
function manejarVictoria(jugadorGanador) {
    juegoActual.palabrasJugadas++;

    if (juegoActual.palabraFinal) {
        // Fin de la partida - mostrar ganador final
        mostrarGanadorFinal();
    } else {
        // Siguiente palabra
        mostrarMensaje(`🎉 ¡${jugadorGanador.nombre} resolvió la palabra! Siguiente ronda...`, 'success');
        setTimeout(() => nuevaPalabra(), 3000);
    }
}

// Mostrar ganador final
function mostrarGanadorFinal() {
    // Encontrar al jugador con más puntos
    let ganador = juegoActual.jugadores[0];
    juegoActual.jugadores.forEach(jugador => {
        if (jugador.puntos > ganador.puntos) {
            ganador = jugador;
        }
    });

    mostrarMensaje(`🏆🏆🏆 ¡${ganador.nombre} GANÓ LA PARTIDA con ${ganador.puntos} puntos! 🏆🏆🏆`, 'success');

    // Mostrar botón para nueva partida
    setTimeout(() => {
        const confirmar = confirm(`¡Partida terminada!\n\nGanador: ${ganador.nombre} con ${ganador.puntos} puntos\n\n¿Jugar otra partida?`);
        if (confirmar) {
            nuevaPartida();
        }
    }, 3000);
}

// Verificar si ganó
function verificarVictoria() {
    for (let letra of juegoActual.palabraActual) {
        if (letra !== ' ' && !juegoActual.letrasReveladas.has(letra)) {
            return false;
        }
    }
    return true;
}

// Actualizar letras intentadas
function actualizarLetrasIntentadas() {
    const letras = Array.from(juegoActual.letrasIntentadas).sort().join(' ');
    document.getElementById('guessedLetters').textContent = letras;
}

// Mostrar mensaje
function mostrarMensaje(texto, tipo) {
    const messageEl = document.getElementById('message');
    messageEl.textContent = texto;
    messageEl.className = `message ${tipo}`;
}

// Event Listeners
document.getElementById('startGame').addEventListener('click', iniciarJuego);
document.getElementById('spinBtn').addEventListener('click', girarSlots);
document.getElementById('guessBtn').addEventListener('click', adivinarLetra);
document.getElementById('guessWordBtn').addEventListener('click', adivinarPalabra);
document.getElementById('newGameBtn').addEventListener('click', nuevoJuego);

document.getElementById('letterInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') adivinarLetra();
});

document.getElementById('wordInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') adivinarPalabra();
});

// Iniciar
inicializarRodillo();
