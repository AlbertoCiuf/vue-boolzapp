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

    newMessage(currentContact){
      console.log('invio');
      let userSentMsg = {
        date:'',
        text: this.newMsg,
        status: 'sent'
      }

      if (this.newMsg.trim() != '') {
        currentContact.messages.push(userSentMsg);
        this.newMsg='';
        setTimeout(() =>{
          let autoReply = {
            date:'',
            text: 'Okay!',
            status: 'received'
          }
        currentContact.messages.push(autoReply);
        }, 1000);
      }
    }
  }

});