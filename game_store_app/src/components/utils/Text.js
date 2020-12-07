import React from 'react';
import styled from 'styled-components';

export default Text = ({ ...props }) => {
    return <TextStyle {...props}>{props.children}</TextStyle>
}

const TextStyle = styled.Text`
    font-family: 'Avenir Next';
    color: ${props => props.color ?? '#FFFFFF'}

    ${({ title, large, medium, small }) => {
        switch (true) {
            case title:
                return `font-size: 32px`;
            case large:
                return `font-size: 20px`;
            case medium:
                return `font-size: 16px`;
            case small: 
                return `font-size: 13px`;

            default: 
                return `font-size: 14px`;
        }
    }}

    ${({light, bold, heavy}) => {
        switch(true) {
            case light:
                return `font-weight: 200`;
            case bold:
                return `font-weight: 600`;
            case heavy:
                return `font-weight: 700`;

            default: 
                return `font-weight: 400`;
        }
    }}

    ${({center, right}) => {
        switch(true) {
            case center:
                return `text-align: center`;
            case right:
                return `text-align: right`;

            default: 
                return `text-align: left`;
        }
    }}
`;