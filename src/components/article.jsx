
function Article(props) {
    return(
        <>
        <h3>{props.title}</h3>
        <small>
            <li>mentor : {props.mentor}</li>
            <li>jadwal : {props.date}</li>
            <li>{props.status ?"latest" : "old"}</li>
        </small>
        </>
    );  
}
export default Article