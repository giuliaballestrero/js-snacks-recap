const { createApp } = Vue;

createApp ( {
    data() {
        
        return {
            userNumber: '',
            mySum: '',
            myArray: []
        }

        
    },

    methods: {
        getRandomArray(){
            axios.get(`https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=100&items=${this.userNumber}`)
            .then((response) => {
                console.log(response.data);
                this.myArray = response.data.response;
                console.log(this.myArray)
                this.getSum();
            })
        },

        getSum() {

            let sum = 0;

            for (let i = 0; i < this.myArray.length; i++) {
                sum += this.myArray[i]
            }
            console.log(sum)
            this.mySum = sum;
        }

        
    },

}).mount('#app');


/** Chiedere all'utente quanti elementi vuole includere nell'array.
 Generare attraverso l'API (array/integers) un array contenente N numeri compresi tra 1 e 100.
 Stampare a schermo la somma dei numeri generati. 
 
 `https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=100&items=$this.userNumber`
 */