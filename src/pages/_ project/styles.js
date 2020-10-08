import styled from 'styled-components/native';

export const Header = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 5px 15px;
    height: 40px;
`;


export const ViewLogout = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 50px;
    margin-right: 40px;
`;

export const LogoutText = styled.Text`
    color: white;
    font-size: 16px;
    margin-bottom: 40%;
`;

export const Tela = styled.View`
    flex: 1;
    background-color: rgb(64,62,63);
    padding: 10px;
`;

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items:center;
    padding: 0 10px;
`;

export const ButtonView = styled.TouchableOpacity`
    background-color: rgba(239, 80, 40, 131);
    border: 1px solid white;
    width: 220px;
    height: 50px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    margin-bottom: 40px;
    text-transform: uppercase; 
`;

export const ButtonTextHome = styled.Text`
    color: #fff;
    font-size: 20px;
`;

export const ButtonAdd = styled.TouchableOpacity`
    background-color: rgba(239, 80, 40, 131);
    border: 1px solid white;
    width: 220px;
    height: 50px;
    justify-content: center;
    align-items:center;
    border-radius: 8px;
`;

export const Expandir = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
`;

export const Texto = styled.Text`
    justify-content: space-between;
    width: 150px;
    color: #fff;
    max-width: 70%;
`;

export const Input = styled.TextInput`
    background-color: rgb(64,62,63);
    color: white;
    border:1px solid rgba(239, 80, 40, 131);
    font-size: 18px; 
    width: 250px;
    height: 50px;
    padding: 0 10px;
    border-radius: 8px;
    margin-bottom: 10px;
`;

export const ButtonSignUp = styled.TouchableOpacity`
    background-color: rgba(239, 80, 40, 131);
    border: 1px solid white;
    width: 250px;
    height: 50px;
    justify-content: center;
    align-items:center;
    border-radius: 8px;   
`;

export const ButtonSignUpText = styled.Text`
    color: #fff;
    font-size: 18px; 
`;

export const ButtonDelProject = styled.TouchableOpacity`
    margin-right: 15px
`;

export const AccordionView = styled.View`
    flex: 1;
    padding: 20px;
`;

