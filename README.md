# 🗼 Torre de Hanoi - Análisis Matemático Avanzado

Un juego interactivo que implementa el clásico problema de la **Torre de Hanoi** con análisis matemático completo, demostrando la aplicación práctica de **recurrencias**, **inducción matemática** y **complejidad algorítmica**.

## 📋 Tabla de Contenidos

- [🎯 Descripción del Proyecto](#-descripción-del-proyecto)
- [🧮 Fundamento Matemático](#-fundamento-matemático)
- [✨ Características Principales](#-características-principales)
- [🚀 Instalación y Uso](#-instalación-y-uso)
- [📊 Análisis de Complejidad](#-análisis-de-complejidad)
- [🎮 Niveles de Dificultad](#-niveles-de-dificultad)
- [🔬 Documentación Técnica](#-documentación-técnica)
- [📐 Demostración Matemática](#-demostración-matemática)
- [👨‍💻 Estructura del Código](#-estructura-del-código)

## 🎯 Descripción del Proyecto

La **Torre de Hanoi** es un problema matemático clásico inventado por el matemático francés **Édouard Lucas** en 1883. Este proyecto no solo implementa el juego interactivo, sino que proporciona un análisis matemático completo del problema.

### 🎯 Objetivo del Juego
Mover todos los discos de la **Torre 1** (origen) a la **Torre 2** (destino) usando la **Torre 3** (auxiliar), siguiendo estas reglas:
- Solo se puede mover un disco a la vez
- Solo se puede mover el disco superior de cada torre
- Un disco grande nunca puede colocarse sobre un disco pequeño

## 🧮 Fundamento Matemático

### 📐 Fórmula de Recurrencia
```
T(n) = 2 × T(n-1) + 1, para n > 1
T(1) = 1
```

**Explicación de la recurrencia:**
- Para mover `n` discos necesitas:
  1. Mover `n-1` discos a la torre auxiliar: `T(n-1)` movimientos
  2. Mover el disco más grande al destino: `1` movimiento
  3. Mover `n-1` discos de auxiliar al destino: `T(n-1)` movimientos
- **Total:** `2 × T(n-1) + 1`

### 🎯 Forma Cerrada
```
T(n) = 2ⁿ - 1
```

### 📝 Demostración por Inducción

**Caso Base:** T(1) = 2¹ - 1 = 1 ✓

**Hipótesis Inductiva:** Supongamos que T(k) = 2ᵏ - 1 para todo k ≤ n-1

**Paso Inductivo:**
```
T(n) = 2 × T(n-1) + 1
     = 2 × (2^(n-1) - 1) + 1
     = 2^n - 2 + 1
     = 2^n - 1 ✓
```

## ✨ Características Principales

### 🔧 Funcionalidades del Juego
- ✅ **Interfaz Gráfica Interactiva** - Drag & drop de discos
- ✅ **Validación Automática** - Imposible hacer movimientos inválidos
- ✅ **Contador de Movimientos** - Seguimiento en tiempo real
- ✅ **Análisis de Eficiencia** - Comparación con solución óptima
- ✅ **Solución Automática** - Algoritmo recursivo implementado
- ✅ **Múltiples Dificultades** - De 3 a 12 discos
- ✅ **Historial de Movimientos** - Registro completo de jugadas

### 🧮 Funcionalidades Matemáticas
- ✅ **Validación de Fórmulas** - Comprueba recursiva vs forma cerrada
- ✅ **Análisis de Complejidad** - Crecimiento exponencial visualizado
- ✅ **Demostración Automática** - Prueba matemática interactiva
- ✅ **Estimación de Tiempo** - Predicción de duración basada en movimientos
- ✅ **Clasificación por Niveles** - Sistema automático de dificultad

## 🚀 Instalación y Uso

### 📋 Requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- No requiere servidor ni instalación adicional

### 🔧 Instalación
```bash
# Clonar o descargar el proyecto
git clone [URL-del-repositorio]

# Navegar al directorio
cd "Matematicas Avanzada"

# Abrir en navegador
# Hacer doble clic en view/index.html
```

### 🎮 Uso Básico
1. **Seleccionar Dificultad:** Usar el slider para elegir número de discos (3-12)
2. **Hacer Movimientos:** Clic en disco → Clic en torre destino
3. **Ver Progreso:** Observar contador de movimientos y eficiencia
4. **Obtener Ayuda:** Botón "Mostrar Solución" para ver movimientos óptimos
5. **Reiniciar:** Botón "Reset" para comenzar de nuevo

### 🔍 Funciones Avanzadas
```javascript
// Demostrar análisis matemático
demonstrateMath();

// Obtener solución óptima
showSolution();

// Cambiar dificultad programáticamente
initGame(8); // 8 discos
```

## 📊 Análisis de Complejidad

### 📈 Crecimiento Exponencial

| Discos (n) | Movimientos Mínimos | Fórmula | Tiempo Estimado* |
|------------|-------------------|---------|------------------|
| 3 | 7 | 2³ - 1 | 7 segundos |
| 4 | 15 | 2⁴ - 1 | 15 segundos |
| 5 | 31 | 2⁵ - 1 | 31 segundos |
| 6 | 63 | 2⁶ - 1 | 1 minuto |
| 7 | 127 | 2⁷ - 1 | 2 minutos |
| 8 | 255 | 2⁸ - 1 | 4 minutos |
| 9 | 511 | 2⁹ - 1 | 8 minutos |
| 10 | 1,023 | 2¹⁰ - 1 | 17 minutos |
| 11 | 2,047 | 2¹¹ - 1 | 34 minutos |
| 12 | 4,095 | 2¹² - 1 | 68 minutos |

*Asumiendo 1 movimiento por segundo

### 📊 Complejidad Computacional
- **Forma Recursiva:** O(2ⁿ) - Exponencial
- **Forma Cerrada:** O(1) - Constante
- **Espacio:** O(n) - Lineal para almacenar torres

## 🎮 Niveles de Dificultad

El sistema clasifica automáticamente la dificultad basado en el número mínimo de movimientos:

### 🟢 Principiante (3-4 discos)
- **Movimientos:** 7-15
- **Tiempo:** 7-15 segundos
- **Ideal para:** Aprender las reglas básicas

### 🟡 Intermedio (5-6 discos)
- **Movimientos:** 31-63
- **Tiempo:** 0.5-1 minuto
- **Ideal para:** Desarrollar estrategia

### 🟠 Avanzado (7-8 discos)
- **Movimientos:** 127-255
- **Tiempo:** 2-4 minutos
- **Ideal para:** Desafío moderado

### 🔴 Experto (9-10 discos)
- **Movimientos:** 511-1,023
- **Tiempo:** 8-17 minutos
- **Ideal para:** Jugadores experimentados

### 🟣 Maestro (11-12 discos)
- **Movimientos:** 2,047-4,095
- **Tiempo:** 34-68 minutos
- **Ideal para:** Máximo desafío práctico

## 🔬 Documentación Técnica

### 🏗️ Arquitectura del Sistema

```
Matematicas Avanzada/
├── 📁 controller/
│   └── 🎮 hanoiTower.js      # Lógica del juego y matemáticas
├── 📁 view/
│   ├── 🖼️ index.html         # Interfaz principal
│   └── 🎨 styles.css         # Estilos y diseño
└── 📖 README.md              # Documentación
```

### 🧩 Componentes Principales

#### 🎯 HanoiTowerGame (Clase Principal)
```javascript
class HanoiTowerGame {
    constructor()                    // Inicialización
    calculateMinimumMoves(n)         // Forma cerrada: 2^n - 1
    calculateMinimumMovesRecursive(n) // Forma recursiva
    validateFormulas(n)              // Validación matemática
    isValidMove(from, to)            // Validación de movimientos
    makeMove(from, to)               // Ejecución de movimientos
    getSolution(n, src, dest, aux)   // Algoritmo recursivo óptimo
}
```

#### 🔧 Funciones de Interfaz
```javascript
initGame(numberOfDisks)    // Inicializar con n discos
moveDisk(fromTower, toTower) // Realizar movimiento
resetGame()                // Reiniciar juego
getGameState()             // Obtener estado actual
showSolution()             // Mostrar solución óptima
demonstrateMath()          // Demostración matemática
```

### 📊 Validación Matemática Automática

El sistema incluye validación automática que comprueba que la implementación recursiva y la forma cerrada dan el mismo resultado:

```javascript
validateFormulas(n) {
    const closedForm = this.calculateMinimumMoves(n);        // 2^n - 1
    const recursiveForm = this.calculateMinimumMovesRecursive(n); // Recursión
    return {
        isValid: closedForm === recursiveForm  // Debe ser siempre true
    };
}
```

## 📐 Demostración Matemática

### 🔍 Análisis de Recurrencia

La función `demonstrateFormulas()` proporciona una demostración completa:

```javascript
demonstrateMath(); // Ejecutar en consola del navegador
```

**Salida esperada:**
```
🔢 DEMOSTRACIÓN MATEMÁTICA - TORRE DE HANOI
============================================================
Fórmula de Recurrencia: T(n) = 2 * T(n-1) + 1, T(1) = 1
Forma Cerrada: T(n) = 2^n - 1
============================================================
n= 1: T(1) = 2^1 - 1 = 1    | Recursiva:    1 | Tiempo estimado: 1s | Válida: true
n= 2: T(2) = 2^2 - 1 = 3    | Recursiva:    3 | Tiempo estimado: 3s | Válida: true
n= 3: T(3) = 2^3 - 1 = 7    | Recursiva:    7 | Tiempo estimado: 7s | Válida: true
...
n=12: T(12) = 2^12 - 1 = 4095 | Recursiva: 4095 | Tiempo estimado: 1h 8m | Válida: true
```

### 🎯 Algoritmo de Solución

El algoritmo recursivo implementa la estrategia clásica:

```javascript
function hanoi(n, origen, destino, auxiliar) {
    if (n === 1) {
        mover_disco(origen, destino);
    } else {
        hanoi(n-1, origen, auxiliar, destino);    // Paso 1
        mover_disco(origen, destino);             // Paso 2
        hanoi(n-1, auxiliar, destino, origen);    // Paso 3
    }
}
```

## 👨‍💻 Estructura del Código

### 🎨 Frontend (HTML/CSS)
- **Interfaz Responsiva:** Adaptable a diferentes tamaños de pantalla
- **Animaciones CSS:** Transiciones suaves para movimientos
- **Diseño Intuitivo:** Colores y formas que facilitan el juego

### 🧠 Backend (JavaScript)
- **Programación Orientada a Objetos:** Encapsulación y modularidad
- **Validación Robusta:** Previene movimientos inválidos
- **Optimización Matemática:** Forma cerrada para cálculos instantáneos

### 📈 Análisis de Rendimiento
- **Complejidad Temporal:** O(1) para cálculos, O(2ⁿ) para solución completa
- **Complejidad Espacial:** O(n) para almacenar estado del juego
- **Escalabilidad:** Funciona eficientemente hasta 12 discos

## 🎓 Aplicaciones Educativas

### 📚 Conceptos Matemáticos Demostrados
- ✅ **Relaciones de Recurrencia**
- ✅ **Inducción Matemática**
- ✅ **Complejidad Exponencial**
- ✅ **Algoritmos Recursivos**
- ✅ **Análisis de Algoritmos**

### 🎯 Objetivos de Aprendizaje
1. **Comprender** cómo surge una recurrencia de un problema real
2. **Aplicar** inducción matemática para demostrar fórmulas
3. **Comparar** diferentes enfoques algorítmicos (recursivo vs cerrado)
4. **Analizar** crecimiento exponencial y sus implicaciones prácticas
5. **Implementar** soluciones matemáticas en código funcional

---

## 👨‍🎓 Información Académica

**Proyecto:** Matemáticas Avanzadas - Torre de Hanoi  
**Tema:** Análisis de Recurrencias y Complejidad Algorítmica  
**Tecnologías:** JavaScript, HTML5, CSS3  
**Autores:** David Viloria, Juana Maria Ospina , Victor Manuel David, Juan Pablo Vasquez  

---

*"La Torre de Hanoi es un ejemplo perfecto de cómo la elegancia matemática se traduce en código eficiente y comprensible."*