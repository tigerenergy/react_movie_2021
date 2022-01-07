function Movie({coverImg, title, summary, genres})
{
    return(
    <div>
        <img src={coverImg} alt={title}/>
            <h2>{title}</h2>
                <p>{summary}</p>
                    <div>
                        <li>{genres}</li>
                    </div>
                    <hr />
                </div>
    )
}

export default Movie