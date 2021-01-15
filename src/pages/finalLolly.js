import React from "react"
import Header from "../Components/Header"
import Lolly from "../Components/Lolly"
import "../styles/finalLolly.css"

export default function Home() {
  return (
    <div className="container">
      <Header />
      <div className="Lollies">
        <div>
          <Lolly
            fillLollyTop="#d52358"
            fillLollyMiddle="#e95946"
            fillLollyBottom="#deaa43"
          />
        </div>

        <div className="linkbox" >
            <div className="linklabel">
                <p>Your lolly is freezing. Share it with this link:</p>
            </div>
            <div className="link">
                <p>https://vlolly.net/lolly/tS8yjSGwc</p>
            </div>
            <div className="details"> 
                <div className="detailsdiv">
                    <h1>Receiver</h1>
                    <p>Message</p>
                    <h1>Sender</h1>
                </div>
            </div>
        </div>

      </div>
    </div>
  )
}
