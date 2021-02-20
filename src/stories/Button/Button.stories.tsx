// src/components/Task.stories.js

import React from 'react';

import {NavBar} from './Button';

export default {
    component: NavBar,
    title: 'NavBar',
};

const Template = () => <NavBar/>;

export const Default = Template.bind({});
