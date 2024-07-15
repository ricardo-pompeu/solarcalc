// script.js

document.getElementById('solarForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const consumo = document.getElementById('consumo').value;
    const localizacao = document.getElementById('localizacao').value;
    const tipo = document.getElementById('tipo').value;

    let precoPorKWh;

    switch (tipo) {
        case 'residencial':
            precoPorKWh = 0.5;
            break;
        case 'comercial':
            precoPorKWh = 0.45;
            break;
        case 'industrial':
            precoPorKWh = 0.4;
            break;
        default:
            precoPorKWh = 0.5;
    }

    const custoTotal = consumo * precoPorKWh;

    const resultado = `Para um consumo mensal de ${consumo} kWh na localização ${localizacao} e tipo de instalação ${tipo}, 
                       o custo estimado do sistema de energia solar é R$${custoTotal.toFixed(2)}.`;

    document.getElementById('resultado').innerText = resultado;
});


/*MODO ESCURO E CLARO*/

document.addEventListener('DOMContentLoaded', () => {
    const toggleThemeButton = document.getElementById('toggle-theme');
    const body = document.body;

    // Function to apply the appropriate theme
    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            body.classList.remove('light-mode');
        } else {
            body.classList.add('light-mode');
            body.classList.remove('dark-mode');
        }
    }

    // Event listener for the theme toggle button
    toggleThemeButton.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            applyTheme('light');
        } else {
            applyTheme('dark');
        }
    });

    // Set initial theme based on system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        applyTheme('dark');
    } else {
        applyTheme('light');
    }

    // Listen for changes in the system theme
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        applyTheme(e.matches ? 'dark' : 'light');
    });
});

