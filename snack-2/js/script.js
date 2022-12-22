/***
Chiedere all'API 10 nomi da inserire in un array di invitati.
 Una volta generata la lista chiedere all'utente di dire il proprio nome.
 Se è uno degli invitati ritornare un messaggio di benvenuto, altrimenti di accesso negato.
*/

const {createApp} = Vue;


createApp({
    data(){
        return{
            randomGuestsList : [],
            totalGuests : 10,
            userName: '',
        }
    },



    methods :{
        getARandomName(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/name')
                .then(response => {
                    this.randomGuestsList.push(response.data.response);
                })
                .catch(error => {
                    console.warn(error.response.data.message)
                })
        },

        getXRandomNames(){
            for(let i = 0 ; i<this.totalGuests ; i++){
                this.getARandomName();
            }
        },
    },

    created(){
        this.getXRandomNames();
    }
}).mount('#app')