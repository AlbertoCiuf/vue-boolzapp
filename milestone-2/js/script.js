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
            date: '15/11/2021 15:55:08',
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
            date: '15/11/2021 15:55:08',
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
            text: 'Hai fatto il compito?',
            status: 'sent'
          },
          {
            date: '15/11/2021 15:51:08',
            text: 'Sìsì, tutto bene',
            status: 'received'
          },
          {
            date: '15/11/2021 15:55:08',
            text: 'Grande',
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
            text: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur laborum saepe provident incidunt delectus ratione optio reiciendis voluptatem, impedit qui.',
            status: 'sent'
          },
          {
            date: '15/11/2021 15:51:08',
            text: 'Sìsì, tutto bene',
            status: 'received'
          },
          {
            date: '15/11/2021 15:55:08',
            text: 'Per fortuna!',
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
            date: '15/11/2021 15:55:08',
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
            date: '15/11/2021 15:55:08',
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
            date: '15/11/2021 15:55:08',
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
            date: '15/11/2021 15:55:08',
            text: 'Per fortuna!',
            status: 'sent'
          },

        ]
      }
    ],
    counter: 0,
  },

  methods: {

  }

});