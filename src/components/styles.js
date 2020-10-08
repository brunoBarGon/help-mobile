import styled from 'styled-components/native';

export const Expandir = styled.View`
    background-color: #ccc;
`;

export const ButtonProject= styled.TouchableOpacity`
    background-color: rgba(239, 80, 40, 131);
    justify-content: space-between;
    align-items:center;
    text-align:center;
    border-radius: 8px;
    flex-direction: row-reverse;
    width: 100%;
    height: 50px;
    margin-top: 15px;
`;

export const TitleProject = styled.Text`
    font-size: 20px;
    color: #fff;
`;

export const ButtonAdd = styled.TouchableOpacity`
    margin-left: 15px;
`;

export const TaskView = styled.View`
    width: 200px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    padding: 10px 20px 10px 20px;
`;