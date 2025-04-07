import {createSlice} from '@reduxjs/toolkit';
//зміна слайс зберігає те що повертає функція createSlice, результат виклику цієї фунції
const slice = createSlice({
    name: "contacts",
    initialState: {
         items:
            [
                { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
                { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
                { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
                { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
            ],
    },
    reducers: {
        //імя фабрики екшенів
        addContact: (state, action) => {
            //за допомогою  Immer імутабельно оновлює оригінал, змінюємо копію стану(чернетка) а не сам стан(особливість Redux) і чернетку змінюємо як забажаємо
            state.items.push(action.payload);

            // return {
            //     ...state,
            //     items: [...state.items, action.payload],

                //payload містить дані, які передаються разом з дією.
//action.payload – це властивість об'єкта дії (action) в Redux, яка містить дані, необхідні для оновлення стану. 
            },
        

        deleteContact: (state, action) => {
            //(contact) => contact.id !== action.payload – функція-фільтр, яка для кожного контакту перевіряє:
// Якщо contact.id НЕ дорівнює значенню, що міститься в action.payload, тоді контакт залишається в масиві.
            // Якщо contact.id дорівнює action.payload, він виключається.
            

            state.items = state.items.filter((contact) => contact.id !== action.payload);

            
// Таким чином, коли редюсер отримує дію, він може отримати значення з action.payload і використовувати його для обчислення нового стану.
        },
    },
});
// об"єкт фабрик екшенів(actions) генератор екшенів, експортуємо екшени, сигналізує що потрібно змінити 
export const { addContact, deleteContact } = slice.actions;
//для поновлення та зміну стану
export default slice.reducer;

// const initialeState = {
//   items: [
//     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//   ],
// };

// export default function contactSliceReducer(state = initialeState, action) {
//   switch (action.type) {
//     case "contacts/deleteContact":
//       return {
//         ...state,
//         items: state.items.filter((contact) => contact.id !== action.payload),
//       };

//     case "contacts/addContact":
//       return {
//         ...state,

//         items: [...state.items, action.payload],
//       };

//     default:
//       return state;
//   }
// }

// export const deleteContact = createAction("contacts/deleteContact");
// export const addContact = createAction("contacts/addContact");
