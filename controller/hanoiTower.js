/**
 * TORRE DE HANOI - IMPLEMENTACIÓN MATEMÁTICA
 * 
 * FÓRMULA DE RECURRENCIA:
 * T(n) = 2 * T(n-1) + 1, para n > 1
 * T(1) = 1
 * 
 * SOLUCIÓN EN FORMA CERRADA:
 * T(n) = 2^n - 1
 * 
 * DEMOSTRACIÓN POR INDUCCIÓN:
 * Caso base: T(1) = 2^1 - 1 = 1 ✓
 * Hipótesis inductiva: Supongamos que T(k) = 2^k - 1 para k ≤ n-1
 * Paso inductivo: T(n) = 2 * T(n-1) + 1 = 2 * (2^(n-1) - 1) + 1 = 2^n - 2 + 1 = 2^n - 1 ✓
 */

class HanoiTowerGame {
    constructor() {
        // Estado del juego
        this.towers = [[], [], []]; // Torre 0 (origen), Torre 1 (destino), Torre 2 (auxiliar)
        this.numberOfDisks = 3;
        this.moveCount = 0;
        this.bestScore = this.calculateMinimumMoves(this.numberOfDisks);
        this.gameHistory = [];
        this.isGameComplete = false;
        
        // Inicializar el juego
        this.initializeGame();
    }

    /**
     * LÓGICA MATEMÁTICA: Cálculo del número mínimo de movimientos
     * Implementa la fórmula T(n) = 2^n - 1
     */
    calculateMinimumMoves(n) {
        if (n <= 0) return 0;
        return Math.pow(2, n) - 1;
    }

    /**
     * LÓGICA MATEMÁTICA: Implementación recursiva basada en la recurrencia
     * T(n) = 2 * T(n-1) + 1
     */
    calculateMinimumMovesRecursive(n) {
        if (n === 1) return 1; // Caso base: T(1) = 1
        return 2 * this.calculateMinimumMovesRecursive(n - 1) + 1; // Recurrencia
    }

    /**
     * VALIDACIÓN MATEMÁTICA: Verifica que ambas fórmulas dan el mismo resultado
     */
    validateFormulas(n) {
        const closedForm = this.calculateMinimumMoves(n);
        const recursiveForm = this.calculateMinimumMovesRecursive(n);
        return {
            n: n,
            closedForm: closedForm,
            recursiveForm: recursiveForm,
            isValid: closedForm === recursiveForm,
            formula: `T(${n}) = 2^${n} - 1 = ${closedForm}`
        };
    }

    /**
     * INICIALIZACIÓN DEL JUEGO
     * Coloca todos los discos en la torre izquierda (torre 0) en orden decreciente
     */
    initializeGame() {
        this.towers = [[], [], []];
        this.moveCount = 0;
        this.gameHistory = [];
        this.isGameComplete = false;
        
        // Colocar discos en la primera torre (del más grande al más pequeño)
        for (let i = this.numberOfDisks; i >= 1; i--) {
            this.towers[0].push(i);
        }
        
        this.bestScore = this.calculateMinimumMoves(this.numberOfDisks);
        this.updateDisplay();
    }

    /**
     * LÓGICA DE VALIDACIÓN DE MOVIMIENTOS
     * Implementa las reglas del juego: no se puede poner un disco grande sobre uno pequeño
     */
    isValidMove(fromTower, toTower) {
        // Verificar que las torres estén en rango válido
        if (fromTower < 0 || fromTower > 2 || toTower < 0 || toTower > 2) {
            return { valid: false, reason: "Torre fuera de rango" };
        }

        // Verificar que la torre origen no esté vacía
        if (this.towers[fromTower].length === 0) {
            return { valid: false, reason: "Torre origen vacía" };
        }

        // Verificar que no se mueva a la misma torre
        if (fromTower === toTower) {
            return { valid: false, reason: "No se puede mover a la misma torre" };
        }

        // Obtener el disco que se quiere mover (el de arriba)
        const diskToMove = this.towers[fromTower][this.towers[fromTower].length - 1];

        // Si la torre destino está vacía, el movimiento es válido
        if (this.towers[toTower].length === 0) {
            return { valid: true, disk: diskToMove };
        }

        // Verificar la regla principal: disco pequeño sobre disco grande
        const topDiskOnDestination = this.towers[toTower][this.towers[toTower].length - 1];
        if (diskToMove < topDiskOnDestination) {
            return { valid: true, disk: diskToMove };
        } else {
            return { 
                valid: false, 
                reason: `No se puede poner disco ${diskToMove} sobre disco ${topDiskOnDestination}` 
            };
        }
    }

    /**
     * LÓGICA DE MOVIMIENTO
     * Ejecuta un movimiento si es válido y actualiza el estado del juego
     */
    makeMove(fromTower, toTower) {
        const validation = this.isValidMove(fromTower, toTower);
        
        if (!validation.valid) {
            return {
                success: false,
                message: validation.reason,
                moveCount: this.moveCount
            };
        }

        // Realizar el movimiento
        const disk = this.towers[fromTower].pop();
        this.towers[toTower].push(disk);
        this.moveCount++;

        // Registrar el movimiento en el historial
        const move = {
            moveNumber: this.moveCount,
            disk: disk,
            from: fromTower,
            to: toTower,
            towers: this.towers.map(tower => [...tower]) // Copia profunda del estado
        };
        this.gameHistory.push(move);

        // Verificar si el juego está completo
        this.checkGameCompletion();

        this.updateDisplay();

        return {
            success: true,
            message: `Disco ${disk} movido de torre ${fromTower + 1} a torre ${toTower + 1}`,
            moveCount: this.moveCount,
            isComplete: this.isGameComplete
        };
    }

    /**
     * LÓGICA DE VERIFICACIÓN DE FINALIZACIÓN
     * Verifica si todos los discos están en la torre destino (torre 1)
     */
    checkGameCompletion() {
        this.isGameComplete = (
            this.towers[1].length === this.numberOfDisks &&
            this.towers[0].length === 0 &&
            this.towers[2].length === 0
        );

        if (this.isGameComplete) {
            this.displayGameResult();
        }
    }

    /**
     * ANÁLISIS MATEMÁTICO DEL RESULTADO
     */
    displayGameResult() {
        const efficiency = (this.bestScore / this.moveCount * 100).toFixed(2);
        const analysis = {
            completed: true,
            movesUsed: this.moveCount,
            minimumMoves: this.bestScore,
            efficiency: efficiency,
            isOptimal: this.moveCount === this.bestScore,
            formula: `T(${this.numberOfDisks}) = 2^${this.numberOfDisks} - 1 = ${this.bestScore}`,
            extraMoves: this.moveCount - this.bestScore
        };

        console.log("🎉 ¡Juego Completado!");
        console.log(`📊 Análisis Matemático:`);
        console.log(`   • Movimientos utilizados: ${analysis.movesUsed}`);
        console.log(`   • Movimientos mínimos: ${analysis.minimumMoves}`);
        console.log(`   • Fórmula: ${analysis.formula}`);
        console.log(`   • Eficiencia: ${analysis.efficiency}%`);
        console.log(`   • Solución óptima: ${analysis.isOptimal ? 'SÍ' : 'NO'}`);

        if (analysis.extraMoves > 0) {
            console.log(`   • Movimientos extra: ${analysis.extraMoves}`);
        }

        return analysis;
    }

    /**
     * CAMBIAR NÚMERO DE DISCOS
     * Permite modificar la dificultad del juego (máximo recomendado: 12 discos)
     * Razón: Con 12 discos se necesitan 4095 movimientos (2^12 - 1)
     * que es un desafío considerable pero aún manejable
     */
    setNumberOfDisks(n) {
        if (n < 1 || n > 12) {
            return { 
                success: false, 
                message: "Número de discos debe estar entre 1 y 12. Nota: 12 discos requieren 4095 movimientos mínimos." 
            };
        }

        this.numberOfDisks = n;
        this.initializeGame();
        
        const movesRequired = this.bestScore;
        let difficultyLevel = "Fácil";
        
        if (movesRequired > 31) difficultyLevel = "Intermedio";
        if (movesRequired > 127) difficultyLevel = "Difícil";
        if (movesRequired > 511) difficultyLevel = "Experto";
        if (movesRequired > 2047) difficultyLevel = "Maestro";
        
        return {
            success: true,
            message: `Juego reiniciado con ${n} discos - Dificultad: ${difficultyLevel}`,
            minimumMoves: this.bestScore,
            formula: `T(${n}) = 2^${n} - 1 = ${this.bestScore}`,
            difficultyLevel: difficultyLevel
        };
    }

    /**
     * OBTENER ESTADO ACTUAL DEL JUEGO
     */
    getGameState() {
        return {
            towers: this.towers.map(tower => [...tower]),
            numberOfDisks: this.numberOfDisks,
            moveCount: this.moveCount,
            bestScore: this.bestScore,
            isComplete: this.isGameComplete,
            efficiency: this.moveCount > 0 ? (this.bestScore / this.moveCount * 100).toFixed(2) : 100,
            formula: `T(${this.numberOfDisks}) = 2^${this.numberOfDisks} - 1 = ${this.bestScore}`
        };
    }

    /**
     * SOLUCIÓN AUTOMÁTICA
     * Implementa el algoritmo recursivo clásico de Torre de Hanoi
     */
    getSolution(n = this.numberOfDisks, source = 0, destination = 1, auxiliary = 2) {
        if (n === 1) {
            return [{
                disk: 1,
                from: source,
                to: destination,
                description: `Mover disco 1 de torre ${source + 1} a torre ${destination + 1}`
            }];
        } else {
            const moves = [];
            
            // Paso 1: Mover n-1 discos de origen a auxiliar
            moves.push(...this.getSolution(n - 1, source, auxiliary, destination));
            
            // Paso 2: Mover el disco más grande de origen a destino
            moves.push({
                disk: n,
                from: source,
                to: destination,
                description: `Mover disco ${n} de torre ${source + 1} a torre ${destination + 1}`
            });
            
            // Paso 3: Mover n-1 discos de auxiliar a destino
            moves.push(...this.getSolution(n - 1, auxiliary, destination, source));
            
            return moves;
        }
    }

    /**
     * RESET DEL JUEGO
     */
    resetGame() {
        this.initializeGame();
        return { success: true, message: "Juego reiniciado" };
    }

    /**
     * ACTUALIZACIÓN DE LA INTERFAZ
     */
    updateDisplay() {
        // Esta función será llamada desde la interfaz
        if (typeof updateGameDisplay === 'function') {
            updateGameDisplay(this.getGameState());
        }
    }

    /**
     * DEMOSTRACIÓN MATEMÁTICA
     * Muestra la validación de las fórmulas para diferentes valores de n
     * Ahora incluye análisis de complejidad hasta 12 discos
     */
    demonstrateFormulas() {
        console.log("🔢 DEMOSTRACIÓN MATEMÁTICA - TORRE DE HANOI");
        console.log("=" .repeat(60));
        console.log("Fórmula de Recurrencia: T(n) = 2 * T(n-1) + 1, T(1) = 1");
        console.log("Forma Cerrada: T(n) = 2^n - 1");
        console.log("=" .repeat(60));

        for (let n = 1; n <= 12; n++) {
            const validation = this.validateFormulas(n);
            let timeEstimate = "";
            
            // Estimación de tiempo (asumiendo 1 movimiento por segundo)
            const moves = validation.closedForm;
            if (moves < 60) timeEstimate = `${moves}s`;
            else if (moves < 3600) timeEstimate = `${Math.floor(moves/60)}m ${moves%60}s`;
            else if (moves < 86400) timeEstimate = `${Math.floor(moves/3600)}h ${Math.floor((moves%3600)/60)}m`;
            else timeEstimate = `${Math.floor(moves/86400)}d ${Math.floor((moves%86400)/3600)}h`;
            
            console.log(`n=${n.toString().padStart(2)}: ${validation.formula.padEnd(20)} | Recursiva: ${validation.recursiveForm.toString().padStart(4)} | Tiempo estimado: ${timeEstimate} | Válida: ${validation.isValid}`);
        }
        
        console.log("=" .repeat(60));
        console.log("💡 NIVELES DE DIFICULTAD:");
        console.log("   • 3-4 discos: Principiante (7-15 movimientos)");
        console.log("   • 5-6 discos: Intermedio (31-63 movimientos)");
        console.log("   • 7-8 discos: Avanzado (127-255 movimientos)");
        console.log("   • 9-10 discos: Experto (511-1023 movimientos)");
        console.log("   • 11-12 discos: Maestro (2047-4095 movimientos)");
        console.log("=" .repeat(60));
    }
}

// Crear instancia global del juego
let hanoiGame = new HanoiTowerGame();

// Funciones de interfaz
function initGame(numberOfDisks = 3) {
    return hanoiGame.setNumberOfDisks(numberOfDisks);
}

function moveDisk(fromTower, toTower) {
    return hanoiGame.makeMove(fromTower, toTower);
}

function resetGame() {
    return hanoiGame.resetGame();
}

function getGameState() {
    return hanoiGame.getGameState();
}

function showSolution() {
    const solution = hanoiGame.getSolution();
    console.log("📋 SOLUCIÓN ÓPTIMA:");
    solution.forEach((move, index) => {
        console.log(`${index + 1}. ${move.description}`);
    });
    return solution;
}

function demonstrateMath() {
    hanoiGame.demonstrateFormulas();
}

// Exportar para uso en módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { HanoiTowerGame, initGame, moveDisk, resetGame, getGameState, showSolution, demonstrateMath };
}