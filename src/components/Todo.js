import React, { useState, useRef, useEffect } from "react"
import { computeHeadingLevel } from '@testing-library/react';
import FormInput from '../pages/newMeetups';
import { type } from "@testing-library/user-event/dist/type";

function Todo() {

    const [values, setValues] = useState("")


    function OnChange(e){
        setValues(e.target.value)
    }

    function handleChangeEvent(e) {
        e.preventDefault()
        console.log(values)
    }




    return (
        <div>
            <div>

                <header > <div className="octostore">
                Octo Store
                    </div>
                    <div className="line" > <hr /></div>
                    </header>

                    <div className="mockcreative">
                        <div className="addpics"></div>
                    </div>
                
                <div className="content" >
                    <div className="let_test">
        
                       <div className="heythere">
                       <span>Hey there, </span>
                        <h1 className="letstext"><b>Let's Text</b></h1>
                       </div>
                        <p className="paragraph" >Sign up below to get exclusive deals and the latest menu item right on your phone. We'll send you a welcome offer opting in</p>
                   
                    </div>
                    </div>
          
                    
                </div>
                <div className="formhandler">
                            <form onSubmit={handleChangeEvent}>
                                <FormInput onChange={OnChange} />
                            </form>
                        </div>
        
            <footer> <div className="insidefooter"> <span className="spanning">&#169;</span> 2021 Octa Store. All rights reserved</div></footer>
        </div >






    )


}
export default Todo;