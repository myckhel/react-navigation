import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import type { Route } from '@react-navigation/native';
declare type Props = {
    route: Route<string>;
    horizontal: boolean;
    badge?: string | number;
    badgeStyle?: StyleProp<TextStyle>;
    focused: boolean;
    activityTintColor: string;
    renderIcon: (props: {
        focused: boolean;
        color: string;
        size: number;
    }) => React.ReactNode;
    style: StyleProp<ViewStyle>;
};
export default function TabBarIcon({ horizontal, badge, badgeStyle, renderIcon, activityTintColor, focused, style, }: Props): JSX.Element;
export {};
