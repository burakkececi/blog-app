import React from 'react'

const AboutPage = () => {
    return (
        <div className='container'>
            <div className="jumbotron">
                <h1 class="display-4 text-center my-5">About</h1>
                <div className="card">
                    <div className="row">
                        <div className="col-3">
                            <img src="https://avatars.githubusercontent.com/u/71923426?v=4" alt='' style={{width : "300px"}}/>
                        </div>
                        <div className="col-9">
                            <h1 className='h3-small'>Burak Keçeci</h1>
                            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                            <p class="lead">
                                <a class="btn btn-dark mx-1" href="https://github.com/burakkececi" role="button"><i className='fab fa-github'></i> Github</a>
                                <a class="btn btn-danger mx-1" href="https://instagram.com/burakkcecii" role="button"><i className='fab fa-instagram'></i> Instagram</a>
                                <a class="btn btn-primary mx-1" href="https://linkedin.com/in/burakkececi/" role="button"><i className='fab fa-linkedin'></i> LinkedIn</a>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutPage
