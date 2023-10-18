import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../../firebase/firebase-config"

export const addNewContact = createAsyncThunk("contacts/addNewContact", async (contact) => {
    const docRef = await addDoc(collection(db, "contacts"), contact)
    return {...contact, id: docRef.id }
})

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
        },
        removeContact: contactsAdapter.removeOne,
        updateContact: contactsAdapter.updateOne,
    },
    extraReducers(builder){
        builder.addCase(addNewContact.fulfilled, (state, action) => {
            contactsAdapter.addOne(state, action.payload)
        })
    }
})

export default contactsSlice.reducer

export const { addContact, removeContact, updateContact } = contactsSlice.actions

export const { selectAll: selectContacts } = contactsAdapter.getSelectors(
    (state) => state.contacts
)