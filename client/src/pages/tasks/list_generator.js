import primogem from '../../assets/primogem.png'
function list_generator(data) {
    let a = data.map((x) => 
    <div className="task_box">
        <div className = "title_desc">  
            <h5 className="task_text">{x.title}</h5>
            <p>{x.desc}</p>
        </div>
        <div className="price">
            <p>{x.price}</p>
            <img src={primogem} alt="primogem"/>
        </div>
        <div className="checkbox">
            <input type = "checkbox" className= "check" />
        </div>
    </div>);
    return a;
}

export default list_generator;