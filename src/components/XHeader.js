import React from 'react';
import { View, Text } from 'react-native';

const XHeader = ({ header = '', children, footer = '' }) => {
    return (
        <View>
            <View>
                {header}
            </View>
            <View>
                {children}
            </View>
            <View>
                {footer}
            </View>
        </View>
    );
};

const Header = ({ children }) => children;
XHeader.Header = Header;

const Body = ({ children }) => children;
XHeader.Body = Body;

const Footer = ({ children }) => children;
XHeader.Footer = Footer;

export default XHeader;
