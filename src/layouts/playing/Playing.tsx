import React from 'react';

import { AppHeader } from '../../components/AppHeader';
import { CommandBar } from '../../containers/CommandBar';
import { CurrentMatchViewer } from '../../containers/CurrentMatchViewer';

import './Playing.css';

export const Playing: React.SFC = props => (
    <div className="l-playing">
        <AppHeader />
        <CommandBar />
        <CurrentMatchViewer />
    </div>
);
