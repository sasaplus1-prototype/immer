(function() {
  'use strict';

  const { createStore } = window.Redux;

  const ACTION_DECREMENT = 'DECREMENT';
  const ACTION_INCREMENT = 'INCREMENT';

  //----------------------------------------------------------------------------

  const actions = {
    [ACTION_DECREMENT](state) {
      return { ...state, value: state.value - 1 };
    },
    [ACTION_INCREMENT](state) {
      return { ...state, value: state.value + 1 };
    }
  };

  const initialState = {
    name: 'initialState',
    items: [],
    value: 0
  };

  function counter(state = initialState, action) {
    if (actions[action.type]) {
      return actions[action.type](state, action);
    }

    return state;
  }

  const store = createStore(counter);

  store.subscribe(function() {
    console.log(store.getState());
  });

  store.dispatch({ type: ACTION_INCREMENT });
  store.dispatch({ type: ACTION_INCREMENT });
  store.dispatch({ type: ACTION_DECREMENT });
  store.dispatch({ type: ACTION_INCREMENT });
  store.dispatch({ type: ACTION_INCREMENT });

  //----------------------------------------------------------------------------

  const { produce } = window.immer;

  const immerActions = {
    [ACTION_DECREMENT](draft) {
      draft.value -= 1;
      draft.items.push(Date.now());
    },
    [ACTION_INCREMENT](draft) {
      draft.value += 1;
      draft.items.push(Date.now());
    }
  };

  const initialImmerState = {
    name: 'initialImmerState',
    items: [],
    value: 0
  };

  function immerCounter(state = initialImmerState, action) {
    return produce(state, function(draft) {
      if (immerActions[action.type]) {
        return immerActions[action.type](draft, action);
      }
    });
  }

  const immerStore = createStore(immerCounter);

  immerStore.subscribe(function() {
    console.log(immerStore.getState());
  });

  immerStore.dispatch({ type: ACTION_INCREMENT });
  immerStore.dispatch({ type: ACTION_INCREMENT });
  immerStore.dispatch({ type: ACTION_DECREMENT });
  immerStore.dispatch({ type: ACTION_INCREMENT });
  immerStore.dispatch({ type: ACTION_INCREMENT });
})();
