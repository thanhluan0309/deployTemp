
const navbar = () =>{
  
    return (
        <>
        <div  className='navbarStiky' style={{display:'flex',backgroundColor:'#f3c0ec',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',borderRadius:'3px'}}>
        <nav style={{margin:'auto',fontSize:'1.2em',fontFamily:'cursive'}} class="navbar navbar-expand-lg navbar-dark ">
                <a class="navbar-brand" href="/">
                    PHOTO TIME
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#my-nav-bar" aria-controls="my-nav-bar" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="my-nav-bar"><ul class="navbar-nav">

             
                        <li class="nav-item active">
                            <a class="nav-link hover-effect" href="/aboutus">ABOUT US</a>
                        </li>

                        <li class="nav-item active">
                            <a class="nav-link hover-effect" href="/contact">CONTACT US</a>
                        </li>

                        <li class="nav-item active">
                       
                            <a class="nav-link active hover-effect" href="/product">PRODUCT</a>
                        </li>

                 
                      
                    </ul>



                </div>
            </nav>
        </div>
       
        </>
    )
}
export default navbar;