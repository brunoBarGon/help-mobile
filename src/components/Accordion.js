
import React, { useState, useRef, } from "react";
import {Text, TouchableOpacity, View} from 'react-native';
import {Expandir, TitleProject, ButtonProject, ButtonAdd, TaskView} from './styles';

import api from '../services/api'

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState('none');
  const [setRotate, setRotateState] = useState("accordion__icon");
  const [HeightInput, setHeightInput] = useState('none');

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? 'none' : setHeightState('flex')
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  function toggleInput() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightInput(
      setActive === "active" ? 'none' :setHeightInput('flex')
    );
  }

  return (
   <View>
      <ButtonProject className={`accordion ${setActive}`} onPress={() => toggleAccordion()}>
        {props.excluir} 
        
      <TitleProject>{props.title}</TitleProject>
      <ButtonAdd onPress={() => toggleInput()}>
          <Text style={{color:"white"}}>{props.add}</Text>
        </ButtonAdd>
      </ButtonProject>
      <TaskView style={{display:setHeight}}> 
          {props.content}
      </TaskView>
      <View style={{display:HeightInput}}> 
       {props.input}
      </View>
    </View>
  );
}

export default Accordion;
