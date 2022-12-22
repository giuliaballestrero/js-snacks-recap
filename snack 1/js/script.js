const { createApp } = Vue;

createApp ( {
    data() {
        
        return {
            oddNumberList: [],
            evenNumberList: [],
        }

        
    },

    methods: {
        getRandomNumbers () {
            axios.get('https://flynn.boolean.careers/exercises/api/random/int')
            .then((response) => {
                console.log(response.data);
                const number = response.data.response;
                if (number % 2 === 0) {
                    this.evenNumberList.push(number);
                } else {
                    this.oddNumberList.push(number);
                }
                
            })
        }
    },

    mounted(){
            
    },

}).mount('#app');


/**
Creare due div; uno conterrà numeri dispari di colore rosso e l'altro conterrà numeri pari in verde.
 Ad ogni click di un bottone chiedere all'API un numero, se è dispari metterlo nel blocco dispari, e se è pari in quello pari.
*/
