const { createApp } = Vue;

createApp ( {
    data() {
        
        return {
            myText: '',
            messageList: [],
        }

        
    },

    methods: {
        getRandomText(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/sentence')
            .then((response) => {
                console.log(response.data);
                const pcText = response.data.response;
                this.messageList.push({message:pcText, status: 'received'})
                console.log(this.messageList)
            })
        },

        getNewMessage (myText) {
            this.messageList.push({message:myText, status: 'sent'})
            console.log(this.messageList);
            this.pcReply();
        },

        pcReply () {
            setTimeout (this.getRandomText, 1000)
        },
        
    },

}).mount('#app');


/** Creare un input che permetta all'utente di inserire un messaggio e aggiungerlo ad una conversazione (tipo whatsapp).
 Dopo averlo aggiunto chiedere all'API una frase random (attraverso random/sentence) aggiungendo anch'essa al thread,
 differenziando i messaggi utente da quelli del computer. */