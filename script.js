// Fonctions de calcul
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division par zéro impossible");
    }
    return a / b;
}

// Fonction principale de calcul
function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    const resultDiv = document.getElementById('result');
    
    // Vérification des entrées
    if (isNaN(num1) || isNaN(num2)) {
        showResult("Veuillez entrer des nombres valides", "error");
        return;
    }
    
    try {
        let result;
        switch (operation) {
            case 'add':
                result = add(num1, num2);
                break;
            case 'subtract':
                result = subtract(num1, num2);
                break;
            case 'multiply':
                result = multiply(num1, num2);
                break;
            case 'divide':
                result = divide(num1, num2);
                break;
            default:
                throw new Error("Opération non supportée");
        }
        
        showResult(`Résultat: ${result}`, "success");
    } catch (error) {
        showResult(`Erreur: ${error.message}`, "error");
    }
}

function showResult(message, type) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = message;
    resultDiv.className = `result ${type}`;
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    // Afficher la date de build (sera remplacée par GitHub Actions)
    const buildDate = document.getElementById('build-date');
    buildDate.textContent = new Date().toLocaleDateString('fr-FR');
    
    // Permettre le calcul avec la touche Entrée
    document.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            calculate();
        }
    });
});

// Export pour les tests (si nécessaire)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { add, subtract, multiply, divide };
}