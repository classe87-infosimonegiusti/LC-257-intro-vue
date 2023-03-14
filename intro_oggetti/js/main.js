const persona = {
    name: 'mario',
    lastname: 'rossi',
    colori_preferiti: ['rosso', 'verde'],
    stampa_nome_completo() {
        alert(this.name + " " + this.lastname);
    }
};

console.log(persona.name);

persona.stampa_nome_completo();