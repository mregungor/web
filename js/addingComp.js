//indis for ramdom sentences
const nav = document.querySelector('#navbar')
const element = document.querySelector('#footer_id')

const sentences = [
    {
        name:"Anonim",
        text:'Dağın tepesindeki adam oraya düşmedi.'
    },
    {
        name:"Anonim",
        text:'Başlamak için harika biri olmana gerek yok. Fakat harika biri olmak için başlamalısın.'
    },
    {
        name:"Anonim",
        text:"Doğru olanı yap, kolay olanı değil."
    },
    {
        name:"Gorden Eadie",
        text:"Hiçbir şey için ayağa kalkmıyorsanız herhangi bir şey sizi düşürebilir."
    },
    {
        name:"Dr Henry Link",
        text:"Oturduğumuz sürece korkular yaratırız. Harekete geçtiğimizde ise korkularımızın üstesinden geliriz."
    },
    {
        name:"Nelson Mandela",
        text:"Yüksek bir tepeye tırmandığında daha tırmanacak çok tepe olduğunu göreceksin."
    },
    {
        name:"M. Voltaire",
        text:"Pek az insan başkalarının deneyimlerinden yararlanmayı bilecek kadar akıllıdır."
    },
    {
        name:"Bernard Shaw",
        text:"Bu dünyada başarıya ulaşan insanlar istedikleri şartları yakalayan insanlardır. Eğer bu şartları bulamazlarsa, kendileri yaratırlar."
    },
    {
        name:"Henry Ford",
        text:"Hatalar değil, çareler bulun."
    },
    {
        name:"Gazi Mustafa Kemal Atatürk",
        text:"Hayatta en hakiki mürşit, bilimdir."
    },
    {
        name:"Albert Einstein",
        text:"Bütün bilim,her günkü düşüncenin mükemmel şekilde ıslah edilmesinden başka bir şey değildir."
    }
]
let indis = Math.floor(Math.random() * sentences.length)


//footer
const navbar = `<header id="header">      
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
                <div style="width:100px;">
                    <img src="images/logo.png" alt="logo">
                </div>
            </a>
            
        </div>
        <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
                <li ><a href="index.html">Ana Sayfa</a></li>
                <li class="dropdown"><a href="#">Dersler <i class="fa fa-angle-down"></i></a>
                    <ul role="menu" class="sub-menu">
                        <li><a href="ogrenci-asistanlar.html">Öğrenci Asistanlarımız</a></li>
                        <li><a href="dersler.html">Dersler</a></li>
                        <li><a href="programlama-dilleri.html">Programlama Dilleri</a></li>
                        <li><a href="dersler_neuralnets.html">Neural Networks</a></li>
                        <li><a href="service.html">Services</a></li>
                        <li><a href="contact2.html">Contact Us</a></li>
                    </ul>
                </li>                  
                <li class="dropdown"><a href="#">Projeler <i class="fa fa-angle-down"></i></a>
                    <ul role="menu" class="sub-menu">
                        <li><a href="projeler.html">Projeler</a></li>
                        <li><a href="">Scientific</a></li>
                        <li><a href="">Game Development</a></li>
                        <li><a href="blog.html">Blogs</a></li>
                    </ul>
                </li>
                <li class="dropdown"><a href="#">Akademik <i class="fa fa-angle-down"></i></a>
                    <ul role="menu" class="sub-menu">
                        <li><a target="_blank" href="https://avesis.ksbu.edu.tr/emre.gungor/">Avensis</a></li>
                        <li><a href="portfolio.html">Portfolio</a></li>
                        <li><a href="portfolio-details.html">Portfolio Details</a></li>
                    </ul>
                </li> 
                <li class="dropdown"><a href="#">Compilers <i class="fa fa-angle-down"></i></a>
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
    </div>
</div>
</header>`

//navbar
const footer = ` <footer id="footer" class="d-flex">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-12 text-center bottom-separator">
                                    <img src="images/home/under.png" class="img-responsive inline" alt="">
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="testimonial bottom">
                                        <h2>Özlü söz</h2>
                                        <div class="media">
                                            <div class="media-body">
                                                <blockquote>${sentences[indis].text}</blockquote>
                                                <h3><a href="#">- ${sentences[indis].name}</a></h3>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div class="col-md-3 col-sm-6">
                                    <div class="contact-info bottom">
                                        <h2>Contacts</h2>
                                        <address>
                                        E-mail: <a style="cursor: pointer;">emre.gungor-at-ksbu.edu.tr</a> <br> 
                                        GitHub: <a target='_blank' href="https://github.com/mregungor">https://github.com/mregungor</a> <br> 
                                        Fax: +1 (123) 456 7891 <br> 
                                        </address>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-6">
                                    <div class="contact-info bottom">
                                        <h2>Address</h2>
                                        <address>
                                            KSBU, MÜHENDİSLİK VE DOĞA BİLİMLERİ FAKÜLTESİ,
                                            BİLGİSAYAR MÜHENDİSLİĞİ<br> 
                                            Germiyan Kampüsü, <br> 
                                            Merkez, KÜTAHYA <br> 
                                            TÜRKİYE
                                            <br> 
                                        </address>
                                    </div>
                                </div>
                                
                                <div class="col-sm-12">
                                    <div class="copyright-text text-center">
                                        <p>&copy;  Emre GÜNGÖR 2023. All Rights Reserved. <br> Maintained By <span style="font-weight:bold;">Mert Seyit Yılmaz.</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>`

const addFooter = (footer) => {
    element.innerHTML = footer
}   

const addNavbar = (navbar) => {
    nav.innerHTML = navbar
}

addNavbar(navbar)
addFooter(footer)                 
