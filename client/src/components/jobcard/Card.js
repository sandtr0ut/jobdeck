

function myFunction() {
    var x = document.getElementsByClassName("expand");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


<div className="container">
    <div className="lead">
        <div className="card">
            <div className="jobcard bg-light">
                <div className="jobcard-img">
                    <img src="../../../../demo-resources/imgs/nastuh-abootalebi-yWwob8kwOCk-unsplash.jpg" alt />
                </div>
                <div className="jobcard-content">
                    <div className="logo"> <img className="jobcard-logo round-img" src="../../../../readmeMisc/logo.png" alt /></div>
                    <h2>Sr. Software Engineer</h2>
                    <h3>Elevated Acoustics</h3>
                    <h3>$125k</h3>
                    <p className="my-1"><span>Phoenix, AZ</span></p>
                </div>
                {/* <a class="btn btn-primary" type="checkbox" onclick="expand()">View Profile</a> */}
                <input id="toggle" className="toggle btn-primary" type="checkbox" />
                <label htmlFor="toggle" className="btn btn-primary">
                    <i className="fas fa-arrow-circle-down fa-3x" />
                </label>
                <div className="expand">
                    <section>
                        <h2>Example Job</h2>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione nam voluptates
                            architecto. Obcaecati delectus, libero voluptatum omnis ex labore nisi culpa,
                            quisquam dolor excepturi suscipit autem temporibus ab itaque aliquam! Lorem ipsum
                            dolor sit amet consectetur adipisicing elit. Quia dolor fugit adipisci nihil
                            assumenda veritatis earum ea, tempora maxime nobis, obcaecati, vel hic sapiente! Vel
                            labore fuga suscipit ullam voluptates.
            </p>
                    </section>
                </div>
            </div>
        </div>
    </div>

</div>
