import axios from 'axios';

const example = {
    user: {
        id: '3e24decda23da34',
        name: 'Joel Sena',
        email: 'joel.sena@email.com',
        lists: [
            {
                id: '3e24decda23da54',
                id_user: '3e24decda23da34',
                title: 'Default',
                color: ['#71CB32', '#BCEA9D'],
                colorType: 'Verde',
                items: [
                    {
                        id: '3e24decda23bfg54',
                        id_list: '3e24decda23da54',
                        name: 'Macarrão',
                        type: 'Arroz, Pão, Massa, Mandioca',
                        qtd: 2,
                        color: ['#FFAB41', '#FFCE90'] ,
                        validity: '18/01/2022',
                        brand: 'São joão'
                    },

                    {
                        id: '3e24decda23bhg54',
                        id_list: '3e24decda23da54',
                        name: 'Arroz',
                        type: 'Arroz, Pão, Massa, Mandioca',
                        qtd: 1,
                        color: ['#FFE500', '#FFF493'],
                        validity: '18/01/2022',
                        brand: 'São joão'
                    },
                    // Vem mais items
                ]
            },
            {
                id: '3e24decda23db74',
                id_user: '3e24decda23da34',
                title: 'Lista de compras',
                color: ['#FFAB41', '#FFCE90'],
                colorType: 'Laranja',
                items: [
                    {
                        id: '3e24decda23bfg54',
                        id_list: '3e24decda23da54',
                        name: 'Arroz',
                        type: 'Arroz, Pão, Massa, Mandioca',
                        qtd: 1,
                        color: ['#FFAB41', '#FFCE90'] ,
                        brand: 'São joão'
                    },
                    // Vem mais items
                ]
            }
        ]
    }
}

const api = axios.create({
    baseURL: 'https://localhost:3333'
});

export {api, example};