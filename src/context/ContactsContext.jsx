import React, { createContext, useEffect, useReducer } from "react";

import { getContactsFromLS } from "../utils/getContactsFromLS";

export const ContactsContext = createContext();
const initialState = {
  contacts: [],
};

const GET_CONTACTS = "GET_CONTACTS";
const ADD_CONTACT = "ADD_CONTACT";
const DELETE_CONTACT = "DELETE_CONTACT";
const EDIT_CONTACT = "EDIT_CONTACT";

const getContactsAction = (payload) => ({
  type: GET_CONTACTS,
  payload,
});
const addContactAction = (payload) => ({
  type: ADD_CONTACT,
  payload,
});
const editContactAction = (payload) => ({
  type: EDIT_CONTACT,
  payload,
});
const deleteContactAction = (payload) => ({
  type: DELETE_CONTACT,
  payload,
});

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CONTACTS:
      return { ...state, contacts: [...payload, ...state.contacts] };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [payload, ...state.contacts],
      };
    case EDIT_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) => {
          if (contact.id === payload.id)
            return {
              ...contact,
              ...payload,
            };
          return contact;
        }),
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== payload),
      };
    default:
      return state;
  }
};
export const ContactsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const getContacts = () => {
    let result = getContactsFromLS();
    dispatch(getContactsAction(result));
  };

  const addContacts = (payload) => {
    let updatedContacts = [payload, ...state.contacts];
    localStorage.setItem("Contacts", JSON.stringify(updatedContacts));
    dispatch(addContactAction(payload));
  };

  const editContacts = (payload) => {
    let updatedContacts = state.contacts.map((contact) => {
      if (contact.id === payload.id)
        return {
          ...contact,
          ...payload,
        };
      return contact;
    });

    localStorage.setItem("Contacts", JSON.stringify(updatedContacts));
    dispatch(editContactAction(payload));
  };

  const deleteContacts = (payload) => {
    let updatedContacts = state.contacts.filter(
      (contact) => contact.id !== payload
    );
    localStorage.setItem("Contacts", JSON.stringify(updatedContacts));
    dispatch(deleteContactAction(payload));
  };
  useEffect(() => {
    getContacts();
  }, []);

  return (
    <ContactsContext.Provider
      value={{ ...state, addContacts, editContacts, deleteContacts }}
    >
      {children}
    </ContactsContext.Provider>
  );
};
