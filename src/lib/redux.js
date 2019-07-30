// A simple redux store/actions/reducer implementation.
// A true app would be more complex and separated into different files.
import { createStore } from 'redux';

// The actions are the "names" of the changes that can happen to the store
export const actions = {
  ARCHIVE_CARD: 'ARCHIVE_CARD',
  PIN_CARD: 'PIN_CARD',
};

// The action creators are how you bundle actions with the data required to execute them
export const archiveCard = id => ({ type: actions.ARCHIVE_CARD, id });
export const pinCard = d => ({ type: actions.PIN_CARD, id });

// All our reducers simply change the state of a single card.
function cardStateReducer(cardState) {
  return (state, action) => {
    return {
      ...state,
      cards: state.cards.map(
        card => (card.id === action.id ? { ...card, state: cardState } : card)
      ),
    };
  };
}

// The reducer describes how the contents of the store change for each action
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.ARCHIVE_CARD:
      return cardStateReducer('card_ARCHIVED')(state, action);
    case actions.PIN_CARD:
      return cardStateReducer('card_PINNED')(state, action);
    default:
      return state;
  }
};

// The initial state of our store when the app loads.
// Usually you would fetch this from a server
const defaultCards = [
  { id: '1', title: 'Something', state: 'CARD_INBOX' },
  { id: '2', title: 'Something more', state: 'CARD_INBOX' },
  { id: '3', title: 'Something else', state: 'CARD_INBOX' },
  { id: '4', title: 'Something again', state: 'CARD_INBOX' },
];

// We export the constructed redux store
export default createStore(reducer, { cards: defaultCards });