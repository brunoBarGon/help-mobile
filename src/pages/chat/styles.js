import styled from 'styled-components/native';

export const MessageView = styled.View`
    padding:10px 20px;
    background-color: rgb(64,62,63);
`;

export const MessageText = styled.Text`
    background-color: rgba(239, 80, 40, 131);
    margin: 10px;
    padding: 5px;
    color: #fff;
    font-size: 16px;
    border-radius: 8px;
`;

export const MessageSendView = styled.View`
    background-color: rgb(64,62,63);
`;

export const MessageSendInput = styled.TextInput`
    background-color: rgb(64,62,63);
    border-radius: 8px;
    border: 1px solid rgba(239, 80, 40, 131);
    width: 300px;
    padding: 10px;
`;

export const MessagenSendButton = styled.TouchableOpacity`
    background-color: rgba(239, 80, 40, 131);
    height: 40px;
    width: 100px;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    border-radius: 8px;
`;