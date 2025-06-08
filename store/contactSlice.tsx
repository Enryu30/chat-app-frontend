import { createSlice } from "@reduxjs/toolkit";
import { contacts } from "@/data/contacts";

// state
const initialState = {
  sContact: contacts[0],
  allContacts: contacts,
}

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers:{
    setSContact : (state,action) =>{
      state.sContact = action.payload;
    },
    setAllContacts: (state,action) => {
      state.allContacts = action.payload;
    },
  },

}
);


//export actions
export const{setSContact, setAllContacts} = contactSlice.actions;

export default contactSlice.reducer;