import '../components.css';
function Element(props) {
    return (
        <>
            <div className='div'>
                <label className='checkboxLabel'>
                <input className='checkbox' type="checkbox"/>
                <h4>{props.sum} рублей</h4><p className='space'>_</p><h4 className='h4'>в {props.id+1}-й год</h4>
                </label>

            </div>
            <hr />
        </>
    )
}

export default Element;
