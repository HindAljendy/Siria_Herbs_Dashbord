
export default function Selector({name , options}) {
    return (
        <div className='input'>
            <label htmlFor="brand"> {name}</label>
            <select name="brad" id="brad">
                {options && options.map((option,index)=> {
                    return(
                        <option key={index} value="volvo">{option}</option>
                    )
                })             
              }
            </select>
        </div>
    )
}
