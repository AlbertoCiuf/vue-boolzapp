//inizializzo dayjs e lo imposto in italiano
dayjs.extend(window.dayjs_plugin_customParseFormat);
dayjs.locale('it');


const app = new Vue({

  el: '#app',

  data: {
    contacts: [
      {
        name: 'Michele',
        avatar: 'img/avatar_1.jpg',
        visible: true,
        messages: [
          {
            date: '15/11/2021 15:50:08',
            text: 'Sei andato dal dottore?',
            status: 'sent'
          },
          {
            date: '15/11/2021 15:51:08',
            text: 'Sìsì, tutto bene',
            status: 'received'
          },
          {
            date: '15/11/2021 16:55:08',
            text: 'Per fortuna!',
            status: 'sent'
          },

        ]
      },
      {
        name: 'Fabio',
        avatar: 'img/avatar_2.jpg',
        visible: true,
        messages: [
          {
            date: '15/11/2021 15:50:08',
            text: 'Hai mangiato oggi?',
            status: 'sent'
          },
          {
            date: '15/11/2021 15:51:08',
            text: 'Sìsì, tranquilla',
            status: 'received'
          },
          {
            date: '15/11/2021 05:55:08',
            text: 'Perfetto',
            status: 'sent'
          },

        ]
      },
      {
        name: 'Samuele',
        avatar: 'img/avatar_3.jpg',
        visible: true,
        messages: [
          {
            date: '15/11/2021 15:50:08',
            text: 'Tutto bene?',
            status: 'sent'
          },
          {
            date: '15/11/2021 15:51:08',
            text: 'Sìsì, tutto bene',
            status: 'received'
          }

        ]
      },
      {
        name: 'Luigi',
        avatar: 'img/avatar_4.jpg',
        visible: true,
        messages: [
          {
            date: '15/11/2021 15:50:08',
            text: 'Ehi',
            status: 'sent'
          },
          {
            date: '15/11/2021 15:51:08',
            text: 'Questo è incredibile! Inoltra questo messaggio a 10 persone entro 3 minuti e non accadrà niente! Mio cugino ha provato tre volte e ha sempre funzionato. Funziona veramente! Fallo girare! Le persone devono saperlo!',
            status: 'received'
          },
          {
            date: '15/11/2021 12:34:08',
            text: 'Oh mamma',
            status: 'sent'
          },

        ]
      },
      {
        name: 'Ugo',
        avatar: 'img/avatar_5.jpg',
        visible: true,
        messages: [
          {
            date: '15/11/2021 15:50:08',
            text: 'Ehi',
            status: 'sent'
          },
          {
            date: '15/11/2021 15:51:08',
            text: 'Come stai?',
            status: 'received'
          },
          {
            date: '15/11/2021 21:05:08',
            text: 'Bene, grazie!',
            status: 'sent'
          },

        ]
      },
      {
        name: 'Alessandra',
        avatar: 'img/avatar_6.jpg',
        visible: true,
        messages: [
          {
            date: '15/11/2021 15:50:08',
            text: 'Sei andata dalla nonna?',
            status: 'sent'
          },
          {
            date: '15/11/2021 15:51:08',
            text: 'Sìsì, tutto bene',
            status: 'received'
          },
          {
            date: '15/11/2021 09:12:08',
            text: 'Per fortuna!',
            status: 'sent'
          },

        ]
      },
      {
        name: 'Francesco',
        avatar: 'img/avatar_7.jpg',
        visible: true,
        messages: [
          {
            date: '15/11/2021 15:50:08',
            text: 'Sei andato dal dottore?',
            status: 'sent'
          },
          {
            date: '15/11/2021 15:51:08',
            text: 'Sìsì, tutto bene',
            status: 'received'
          },
          {
            date: '15/11/2021 19:55:08',
            text: 'Per fortuna!',
            status: 'sent'
          },

        ]
      },
      {
        name: 'Michelangelo',
        avatar: 'img/avatar_8.jpg',
        visible: true,
        messages: [
          {
            date: '15/11/2021 15:50:08',
            text: 'Che fai stasera?',
            status: 'sent'
          },
          {
            date: '15/11/2021 15:51:08',
            text: 'Esco!',
            status: 'received'
          },
          {
            date: '15/11/2021 14:55:08',
            text: 'Va bene',
            status: 'sent'
          },

        ]
      },
      {
        name: 'Michelangelo',
        avatar: 'img/avatar_8.jpg',
        visible: true,
        messages: [
          {
            date: '15/11/2021 15:50:08',
            text: 'Sei andato dal dottore?',
            status: 'sent'
          },
          {
            date: '15/11/2021 15:51:08',
            text: 'Sìsì, tutto bene',
            status: 'received'
          },
          {
            date: '15/11/2021 13:55:08',
            text: 'Per fortuna!',
            status: 'sent'
          },

        ]
      }
    ],
    counter: 0,
    chatPreview:'',
    newMsg: '',
    searchedValue:'',
    showDDValue: -1
  },

  methods: {

    //funzione che, dato un parametro index, restituisce in output una porzione del testo dell'ultimo messaggio del contatto scelto, seguita da tre puntini di sospensione nel caso in cui la lunghezza dell'ultimo messaggio sia superiore a 8 caratteri
    showChatPreview(index){

      let prev ='';
      
      let singMessage = this.contacts[index].messages[this.contacts[index].messages.length-1].text;

      if (singMessage.length <= 8 ){
        prev = singMessage;
      } else {
        prev = singMessage.substring(0,8)+"...";
      }
      return prev
    },

    //funzione che, dato in input il contatto corrente, pusha all'array di messaggi corrispondente il valore di ciò che viene inserito dall'utente nella casella di testo, alla pressione del tasto invio sulla tastiera. Dopo un secondo, il computer risponderà "okay!", con lo stesso meccanismo. nel caso in cui venga premuto il tasto invio senza scrivere niente nella casella di testo, non succede nulla.
    newMessage(currentContact){

      //imposto come valore della key 'date' la data corrente, ricavata tramite la libreria dayjs
      let userSentMsg = {
        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
        text: this.newMsg,
        status: 'sent'
      }

      if (this.newMsg.trim() !== '') {
        currentContact.messages.push(userSentMsg);
        this.newMsg='';
        setTimeout(() =>{
          let autoReply = {
            date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
            text: 'Okay!',
            status: 'received'
          }
        currentContact.messages.push(autoReply);
        }, 1000);
      }
    },

    //funzione che permette di visualizzare solo le chat relative ai contatti che contengono nel nome ciò che l'utente inserisce nel campo input della barra di ricerca
    triggerSearch(){
      
      for (let contact of this.contacts) {
        if (!contact.name.toLowerCase().includes(this.searchedValue.toLowerCase())){
          contact.visible=false;
        }
        if (this.searchedValue==='') {
          contact.visible=true;
        }
      }
      // console.log(this.searchedValue);
    },

    //funzione che controlla, tramite un operatore ternario quale messaggio è stato cliccato e di conseguenza su quale messaggio far comparire il menù a tendina per l'eventuale eliminazione
    //alla variabile showDDValue, di default -1, viene assegnato il valore dell'indice del messaggio cliccato e tramite il v-show nell'html, il menù compare solo in questo caso e sul messaggio selezionato.
    showDropDown(index) {
      this.showDDValue === -1 ? this.showDDValue = index : this.showDDValue = -1;
    },

    //funzione che elimina il messaggio selezionato, risalendoci tramite il parametro 'index', al click del tasto "elimina messaggio" del dropdown menu
    deleteMessage(index) {
      this.contacts[this.counter].messages.splice(index, 1);
    }

  }


});






