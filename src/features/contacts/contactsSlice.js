import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"

const contactsAdapter = createEntityAdapter()

const initialState = contactsAdapter.getInitialState()

export const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        addContact: {
            reducer: contactsAdapter.addOne,
            prepare(firstname, lastname, phone, email){
                return {
                    payload: {
                        id: Date.now(),
                        firstname,
                        lastname,
                        phone,
                        email,
                    }
                }
            }
        }
    },
})

export default contactsSlice.reducer

export const { addContact } = contactsSlice.actions

export const { selectAll: selectContacts } = contactsAdapter.getSelectors(
    (state) => state.contacts
)