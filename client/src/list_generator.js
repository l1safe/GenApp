
function list_generator(data) {

    let a = data.map((x) => 
    <div className="task_div">
        <h5 className="task_text">{x.title}</h5>
        <div>
            <li>{x.desc}</li>
            <li>{x.price}</li>
        </div>
    </div>);
    return a;
}

export default list_generator;