import React from "react"
import Header from "../Components/Header"
import Lolly from "../Components/Lolly"
import "../styles/indexpg.css"
import { navigate } from "gatsby";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <div className="Lollies">
        <div>
          <Lolly
            fillLollyTop="pink"
            fillLollyMiddle="#5ba3da"
            fillLollyBottom="red"
          />
        </div>
        <div>
          <Lolly
            fillLollyTop="#d52358"
            fillLollyMiddle="#e95946"
            fillLollyBottom="#deaa43"
          />
        </div>
        <div>
          <Lolly
            fillLollyTop="lightgreen"
            fillLollyMiddle="green"
            fillLollyBottom="darkgreen"
          />
        </div>
        <div>
          <Lolly
            fillLollyTop="white"
            fillLollyMiddle="purple"
            fillLollyBottom="pink"
          />
        </div>
        <div>
          <Lolly
            fillLollyTop="red"
            fillLollyMiddle="white"
            fillLollyBottom="#5ba3da"
          />
        </div>
      </div>

      <div className="button">
        <button
          onClick={() => {
            navigate("/newLolly")
          }}
        >
          Make a new lolly to send to a friend.
        </button>
      </div>
    </div>
  )
}
