
function list_generator(data) {
    let a = data.map((x) => 
    <div className="task_box">
        <div className = "title_desc">
            <h5 className="task_text">{x.title}</h5>
            <p>{x.desc}</p>
        </div>
        <p>{x.price}</p>
       <input type = "checkbox" />
    </div>);
    return a;
}

export default list_generator;