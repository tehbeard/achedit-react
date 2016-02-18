import ReactDOM from 'react-dom';
import React from 'react';
import AchievementEditor from './react/achievementEditor.jsx';

import {store} from './react/store/achievementStore.js'; 
console.log("STORE", store);
store.subscribe(function(){
    ReactDOM.render(<AchievementEditor store={store}/>, document.getElementById('ach-editor'));
})
ReactDOM.render(<AchievementEditor store={store}/>, document.getElementById('ach-editor'));