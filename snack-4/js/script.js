/** Chiedere all'utente quanti elementi vuole includere nell'array.
 Generare attraverso l'API (array/integers) un array contenente N numeri compresi tra 1 e 100.
Stampare a schermo la somma dei numeri generati. */


const {createApp} = Vue;


createApp({
    data(){
        return{
            numOfNumbers:0,
            minValue: 1,
            maxValue:100,
            numList : [],
            sum:0,
        }
    },



    methods :{
        getARandomNumber(){
            axios.get(`https://flynn.boolean.careers/exercises/api/array/integers?min=${this.minValue}&max=${this.maxValue}&items=${this.numOfNumbers}`)
                .then(response => {
                    this.numList = response.data.response;
                    this.sum = 0;

                    response.data.response.forEach(num => {
                        this.sum += num;
                    });
                })
                .catch(error => {
                    console.warn(error.response.status +  ' ' + error.response.statusText);
                })
        },
    },
}).mount('#app')