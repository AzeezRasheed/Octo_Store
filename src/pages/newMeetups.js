


function FormInput(props) {

    
  
    return (
        <div>
           
        
            <input type='text' placeholder="Mobile Number" onChange={props.onChange} className="mobilenumber" />
          <button >Button</button>
        </div>
    )

}

export default FormInput;