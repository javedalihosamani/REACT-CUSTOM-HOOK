import useToggle from './useToggle';

const ToggleComponent = () => {
    const [value, toggleValue] = useToggle("Hello Custom Hook");
  return (
    <div className='container my-5'>
        <div className="row">
            <div className="col">
                <div className="lead p-3 border rounded">
                    <h3 className='text-center'>{value.toString()}</h3>

                    <button className="btn btn-outline-success" onClick={()=>{toggleValue(true)}}>Make a True</button>
                    
                    <button className="btn btn-outline-danger mx-3" onClick={()=>{toggleValue(false)}}>Make a False</button>

                    <div className="p-2 border m-3 rounded">
                        <p>What is a Value : <b>{typeof(value)}</b></p>
                        <p>What is a toggleValue : <b>{typeof(toggleValue)}</b></p>
                    </div>
                    
                    <button className="btn btn-outline-dark" onClick={()=>toggleValue("Hello React")}>Toggle</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ToggleComponent