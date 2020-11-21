const InfoBox = ({ info }) => {
    // console.log(info)
    return (
        <div className="event-info">
            <h2>Event Information</h2>
            <ul>
    <li>ID: <a href={info.url} add target="_blank" rel="noreferrer"><strong>{ info.id }</strong></a></li>
    <li>Title: <strong>{ info.title }</strong></li>
    <li>Time: <strong>{ (info.date).toString() }</strong></li>
            </ul>
        </div>
    )
}

export default InfoBox
