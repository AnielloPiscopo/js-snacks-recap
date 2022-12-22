/** Creare un input che permetta all'utente di inserire un messaggio e aggiungerlo ad una conversazione (tipo whatsapp).
 Dopo averlo aggiunto chiedere all'API una frase random (attraverso random/sentence) aggiungendo anch'essa al thread,
differenziando i messaggi utente da quelli del computer. */



const {createApp} = Vue;


createApp({
    data(){
        return{
            userMessage : '',
            messagesList : [],
        }
    },



    methods :{
        getARandomPhrase(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/sentence')
                .then(response => {
                    this.addObjToList(this.messagesList , response.data.response , status = false);
                })
                .catch(error => {
                    console.warn(error);
                })
        },

        addObjToList(list,newElementText,status = true){
            if(newElementText !=''){
                const newElement = {
                    text: newElementText,
                    status: status,
                }

                list.push(newElement);
            }
        },

        refreshInputField(){
            this.userMessage = '';
        },

        receiveAMessage(){
            setTimeout(this.getARandomPhrase,3000);
        }
    },
}).mount('#app')