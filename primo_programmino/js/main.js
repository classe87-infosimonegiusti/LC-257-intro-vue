const { createApp } = Vue

  createApp(
    {
      data() {
        return {
          colore: 'rosso'
        }
      },
      methods: {
        cambiaColore() {
          if (this.colore == 'rosso') {
            this.colore = 'blu';
          } else {
            this.colore = 'rosso';
          }
        }
      }
    }
  ).mount('#app')