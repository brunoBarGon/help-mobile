
import React, { useState, useRef, } from "react";
import {Text, TouchableOpacity, View} from 'react-native';
import {Expandir, TitleProject, ButtonProject, ButtonAdd, TaskView} from './styles';


function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState('none');
  const [HeightInput, setHeightInput] = useState('none');
  const content = useRef(null);

  
  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? 'none' : setHeightState('flex')
    );
    setRotateState(
      setActive === "active" ? "90deg" : "0deg"
    );
  }

  function toggleInput() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightInput(
      setActive === "active" ? 'none' : setHeightInput('flex')
    );
    setRotateState(
      setActive === "active" ? "90deg" : "0deg"
    );
  }

  return (
    <View >
        <ButtonProject onPress={() => toggleAccordion()}>
        {props.excluir}
        <TitleProject >{props.title}</TitleProject>
        <TouchableOpacity onPress={() => toggleInput()}>
          <Text>{props.add}</Text>
        </TouchableOpacity>
      </ButtonProject>


      <View style={{ display: setHeight, backgroundColor: 'pink'}}>
        {props.content}
      </View>
      <View style={{ justifyContent: 'space-between' }}
        ref={content}>
      </View>
      <View style={{ display: HeightInput }}>
        {props.input}
      </View>
    </View>
  );
}

export default Accordion;

