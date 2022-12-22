const { createApp } = Vue;

createApp ( {
    data() {
        
        return {
            guestName: '',
            nameList: [],
            guestInvite: false,
        }

        
    },

    methods: {
        generateRandomName(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/name')
            .then((response) => {
                console.log(response.data);
                const randomName = response.data.response;
                this.nameList.push(randomName);
            })
        },

        checkInvited (guestName) {
            this.guestInvite = this.nameList.includes(guestName);
        }
        
    },

    created(){
        for (let i =0; i < 10; i++) {
            this.generateRandomName();
        }
            
    },

}).mount('#app');


/***
Chiedere all'API 10 nomi da inserire in un array di invitati.
 Una volta generata la lista chiedere all'utente di dire il proprio nome.
 Se è uno degli invitati ritornare un messaggio di benvenuto, altrimenti di accesso negato.
*/