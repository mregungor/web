const navbar = `	<header id="header">      
<div class="container">
    <div class="row">
        <div class="col-sm-12 overflow">
           <div class="social-icons pull-right">
                <ul class="nav nav-pills">
                    <li><a href=""><i class="fa fa-facebook"></i></a></li>
                    <li><a href=""><i class="fa fa-twitter"></i></a></li>
                    <li><a href=""><i class="fa fa-google-plus"></i></a></li>
                    <li><a href=""><i class="fa fa-dribbble"></i></a></li>
                    <li><a href=""><i class="fa fa-linkedin"></i></a></li>
                </ul>
            </div> 
        </div>
     </div>
</div>
<div class="navbar navbar-inverse" role="banner">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>

            <a class="navbar-brand" href="index.html">
                <h1><img src="images/logo.png" alt="logo"></h1>
            </a>
            
        </div>
        <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
                <li ><a href="index.html">Ana Sayfa</a></li>
                <li class="dropdown"><a href="#">Dersler <i class="fa fa-angle-down"></i></a>
                    <ul role="menu" class="sub-menu">
                        <li><a href="aboutus.html">Öğrenci Asistanlarımız</a></li>
                        <li><a href="dersler.html">Dersler</a></li>
                        <li><a href="aboutus2.html">Programlama Dilleri</a></li>
                        <li><a href="dersler_neuralnets.html">Neural Networks</a></li>
                        <li><a href="service.html">Services</a></li>
                        <li><a href="pricing.html">Testing</a></li>
                        <li><a href="contact.html">Contact us</a></li>
                        <li><a href="contact2.html">Contact us 2</a></li>
                        <li><a href="404.html">404 error</a></li>
                        <li><a href="coming-soon.html">Coming Soon</a></li>
                    </ul>
                </li>                  
                <li class="dropdown"><a href="blog.html">Projeler <i class="fa fa-angle-down"></i></a>
                    <ul role="menu" class="sub-menu">
                        <li><a href="blog.html">Projeler (Default)</a></li>
                        <li><a href="">Scientific</a></li>
                        <li><a href="">Game Development</a></li>
                        <li><a href="blogtwo.html">Timeline Projects</a></li>
                        <li><a href="blogone.html">2 Columns + Right Sidebar</a></li>
                        <li><a href="blogthree.html">1 Column + Left Sidebar</a></li>
                        <li><a href="blogfour.html">Blog M</a></li>
                        <li><a href="blogdetails.html">Blog Details</a></li>
                    </ul>
                </li>
                <li class="dropdown"><a href="portfolio.html">Akademik <i class="fa fa-angle-down"></i></a>
                    <ul role="menu" class="sub-menu">
                        <!--<li><a href="portfolio.html">Portfolio Default</a></li>-->
                        <li><a href="portfolio.html">Portfolio Default</a></li>
                        <li><a href="https://avesis.ksbu.edu.tr/emre.gungor/">Avensis</a></li>
                        <li><a href="portfoliofour.html">Isotope 3 Columns + Right Sidebar</a></li>
                        <li><a href="portfolioone.html">3 Columns + Right Sidebar</a></li>
                        <li><a href="portfoliotwo.html">3 Columns + Left Sidebar</a></li>
                        <li><a href="portfoliothree.html">2 Columns</a></li>
                        <li><a href="portfolio-details.html">Portfolio Details</a></li>
                    </ul>
                </li> 
                <li class="dropdown"><a href="portfolio.html">Online Compilers<i class="fa fa-angle-down"></i></a>
                    <ul role="menu" class="sub-menu">
                        <li><a href="ccompiler.html">C</a></li>
                        <li><a href="javacompiler.html">Java</a></li>
                        <li><a href="cppcompiler.html">C++</a></li>
                        <li><a href="pythoncompiler.html">Python</a></li>
                        <li><a href="javascriptcompiler.html">Java Script</a></li>
                    </ul>
                </li>                          
                
            </ul>
        </div>
        <div class="search">
            <form role="form">
                <i class="fa fa-search"></i>
                <div class="field-toggle">
                    <input type="text" class="search-form" autocomplete="off" placeholder="Search">
                </div>
            </form>
        </div>
    </div>
</div>
</header>`

//addComp fuction required for add a navbar section on all pages  
const nav = document.querySelector('#navbar')
const addComp = (navbar) => {
    nav.innerHTML = navbar
}

addComp(navbar)