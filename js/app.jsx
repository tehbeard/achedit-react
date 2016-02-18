import ReactDOM from 'react-dom';
import React from 'react';
import AchievementEditor from './react/achievementEditor.jsx';

import * as store from './react/store/achievementStore.js'; 

ReactDOM.render(<AchievementEditor/>, document.getElementById('ach-editor'));