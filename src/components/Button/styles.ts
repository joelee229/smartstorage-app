import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';


interface ContainerProps {
    filled: boolean;
}

// export const Container = styled(RectButton)<ContainerProps>`
//     width: 100%;
//     height: 60px;
//     background: #FABE4D;
//     border-radius: 16px;
//     border-width: 2px;
//     border-color: #F00;

//     justify-content: center;
//     align-items: center;
//     margin-top: 16px;

//     ${(props) => 
//         props.filled &&
//         css`
//             border-width: 2px;
//             border-color: #F00;
//             background: white;
//         `
//     }
// `;
export const Container = styled.TouchableOpacity<ContainerProps>`
    width: 100%;
    height: 60px;
    background: #FABE4D;
    border-radius: 16px;
    border-width: 2px;
    border-color: #FABE4D;

    justify-content: center;
    align-items: center;
    margin-top: 16px;

    ${(props) => 
        props.filled &&
        css`
            background: white;
        `
    }
`;

export const ButtonText = styled.Text<ContainerProps>`
    font-family: 'Ubuntu_700Bold';
    color: white;
    font-size: 20px;

    ${(props) => 
        props.filled &&
        css`
            color: #FABE4D;
        `
    }
`;