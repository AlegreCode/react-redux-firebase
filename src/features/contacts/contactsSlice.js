import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"

const contactsAdapter = createEntityAdapter()

const initialState = contactsAdapter.getInitialState()

export const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {},
})

export default contactsSlice.reducer

export const { selectAll: selectContacts } = contactsAdapter.getSelectors(
    (state) => state.contacts
)