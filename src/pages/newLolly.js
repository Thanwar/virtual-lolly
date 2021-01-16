import React, { useState, useRef } from "react"
import Header from "../Components/Header"
import Lolly from "../Components/Lolly"
import "../styles/newlolly.css"
import { gql, useMutation, useQuery } from "@apollo/client";
import FinalLolly from "./finalLolly";


const createLollyMutation = gql`
    mutation createLolly($recipientName: String!, $message: String!, $senderName: String!, $flavourTop: String!, $flavourMiddle: String!,$flavourBottom: String!) {
        createLolly(recipientName: $recipientName, message: $message, senderName: $senderName, flavourTop: $flavourTop, flavourMiddle: $flavourMiddle,flavourBottom: $flavourBottom) {
            message
            lollyPath
        }
    }
`

export default function Home() {
  const [color1, setColor1] = useState("#d52358");
  const [color2, setColor2] = useState("#e95946");
  const [color3, setColor3] = useState("#deaa43");
  const [submitted, setsubmitted] = useState(false);
  const [recipientName, setrecipientName] = useState("");
  const [message, setmessage] = useState("");
  const [sender, setsender] = useState("");


  const recipientNameRef = useRef();
  const messageRef = useRef();
  const senderRef = useRef();

  const [createLolly] = useMutation(createLollyMutation);

  const submitLollyForm = async () => {
    console.log("clicked");
    console.log("color 1", color1);
    console.log("sender", senderRef.current.value);
    setrecipientName(recipientNameRef.current.value);
    setmessage(messageRef.current.value);
    setsender(senderRef.current.value);
    const result = await createLolly({
      variables : {
          recipientName: recipientNameRef.current.value,
          message : messageRef.current.value,
          senderName: senderRef.current.value,
          flavourTop: color1,
          flavourMiddle: color2,
          flavourBottom: color3
      }
  });
  console.log("result form server = ",result);
  setsubmitted(true);
}

  let detailsoflolly = {
    color1 : color1,
    color2 : color2,
    color3 : color3,
    recipientName: recipientName,
    message : message,
    sender: sender
  }

  if(submitted){
    return(
      <div>
      <FinalLolly detailsoflolly={detailsoflolly} />
      </div>
    )
  }

  return (
    <div>
      <Header />
      <div className="lollyForm">
        <div>
          <Lolly
            fillLollyTop={color1} fillLollyMiddle={color2} fillLollyBottom={color3}
          />
        </div>
        <div className="lollyFlavour">
          <label htmlFor="flavourTop" className="colorPickerLabel">
            <input
              type="color"
              value={color1}
              className="colorPicker"
              name="flavourTop"
              id="flavourTop"
              onChange={e => {
                setColor1(e.target.value)
              }}
            />
          </label>

          <label htmlFor="flavourTop" className="colorPickerLabel">
            <input
              type="color"
              value={color2}
              className="colorPicker"
              name="flavourTop"
              id="flavourTop"
              onChange={e => {
                setColor2(e.target.value)
              }}
            />
          </label>
          <label htmlFor="flavourTop" className="colorPickerLabel">
            <input
              type="color"
              value={color3}
              className="colorPicker"
              name="flavourTop"
              id="flavourTop"
              onChange={e => {
                setColor3(e.target.value)
              }}
            />
          </label>
        </div>


        <div>
        <div className="fom">
          <div className="lollyFrom">
            <label htmlFor="recipientName">To</label>
            <input
              className="inputfields"
              type="text"
              name="recipientName"
              id="recipientName"
              ref={recipientNameRef}
            />
            <label htmlFor="recipientName">Message</label>
            <textarea className="inputfields" rows="7" columns="15" ref={messageRef} />
            <label htmlFor="recipientName">From</label>
            <input
              className="inputfields"
              type="text"
              name="senderName"
              id="senderName"
              ref={senderRef}
            />
          </div>
        </div>

        <div className="button">
            <button onClick={submitLollyForm}>
              Freeze this lolly and get a link
            </button>
          </div>

        </div>
        
      </div>
    </div>
  )
}
