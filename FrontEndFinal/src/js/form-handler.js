document.getElementById('travelForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = {
        preferences: [],
    };

    formData.forEach((value, key) => {
        if (['pool', 'wifi', 'garage', 'suite'].includes(key)) {
            data.preferences.push(value);
        } else if (key === 'bad' || key === 'no-bad') {
            data.childBed = value === 'true';
        } else {
            data[key] = value;
        }
    });

    fetch('/api/travel', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Viagem adicionada:', data);
            alert('Solicitação de viagem enviada com sucesso!');
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Ocorreu um erro ao enviar sua solicitação.');
        });
});