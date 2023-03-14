const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            elencoClassi: ['prima', 'seconda']
        }
    }
}).mount('#app')