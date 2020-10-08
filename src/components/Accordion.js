
import React, { useState, useRef, } from "react";
import {Text, TouchableOpacity, View} from 'react-native';
import {Expandir, TitleProject, ButtonProject, ButtonAdd, TaskView} from './styles';
import api from '../services/api'
import { AntDesign } from '@expo/vector-icons';

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState('none');
  const [setRotate, setRotateState] = useState("90deg");
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
    fadeIn()
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

  /* <Chevron className={`${setRotate}`} width={10} fill={"#777"} /> */

  return (
    <View >
        <ButtomProject className={`accordion ${setActive}`} onPress={() => toggleAccordion()}>
        {props.excluir}
        <TitleProject className="accordion__title">{props.title}</TitleProject>
        <AntDesign style={{ transform: [{ rotate: setRotate }] }} name="down" size={24} color="black" />
        <TouchableOpacity onPress={() => toggleInput()}>
          <Text>{props.add}</Text>
        </TouchableOpacity>
      </ButtomProject>


      <View style={{ display: setHeight, backgroundColor: 'pink', opacity: fadeAnim }}>
        {props.content}
      </View>
      <View style={{ justifyContent: 'space-between' }}
        ref={content}
        className="accordion__content">
      </View>
      <View style={{ display: HeightInput }}>
        {props.input}

      </View>
    </View>
  );
}

export default Accordion;

