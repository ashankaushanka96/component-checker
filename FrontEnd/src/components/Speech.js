import React from "react";
import { useSpeechSynthesis } from "react-speech-kit";
const Speech = (props) => {
    console.log("here")
  const [value, setValue] = React.useState("");
  
  const { speak } = useSpeechSynthesis();
  const voice = props.name + " is not working Please check"
  setValue(voice)
  console.log(value)
  return (
    speak({ text: value })
  )
  
};
export default Speech;
