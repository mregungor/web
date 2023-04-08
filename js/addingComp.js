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
    },
    {
        name:"Anonim",
        text:"Eğer hazır olana kadar beklersek, hayatımızın sonuna kadar bekliyor oluruz"
    },
    {
        name:"Anonim",
        text:"Paylaşmayı bilenler, mutlu kişilerdir..."
    }
]
let indis = Math.floor(Math.random() * sentences.length)


//footer
const navbar = `<header id="header">      

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
                <div style="display:flex; flex-direction:column">
                    <img " src="images/logo.png" alt="logo">
                    <div style="display:flex; align-items:center; margin-top:2%;">
                        <a href="https://www.scopus.com/authid/detail.uri?authorId=57191825606" target="_blank" ><img style="margin:5px;" width="30px" src="./images/ico/scopus.png" alt=""></a>
                        <a href="https://orcid.org/0000-0003-4278-6294" target="_blank"><img style="margin:5px;" width="30px" src="./images/ico/orcid.png" alt=""></a>
                        <a href="https://publons.com/wos-op/researcher/AAH-9274-2019" target="_blank"><img style="margin:5px;" width="30px" src="./images/ico/publons.png" alt=""></a>
                        <a href="https://scholar.google.com.tr/citations?user=l79fuuYAAAAJ" target="_blank"><img style="margin:5px;" width="30px" src="./images/ico/google-academic.png" alt=""></a>
                    </div>
                </div>
            </a>
            
        </div>
        <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
                <li ><a href="index.html">Ana Sayfa</a></li>
                <li class="dropdown"><a href="#">Dersler <i class="fa fa-angle-down"></i></a>
                    <ul role="menu" class="sub-menu">
                        <li><a href="veri_yapilari.html">Veri Yapıları</a></li>
                        <li><a href="algoritma_ve_programlama.html">Algoritma Ve Programlama</a></li>
                        <li><a href="oyun_programlamaya_giris.html">Oyun Programlamaya Giriş</a></li>
                        <li><a href="oyun_programlama.html">Oyun Programlama</a></li>
                        <li><a href="programlama-dilleri.html">Programlama Dilleri</a></li>
                    </ul>
                </li>                  
                <li class="dropdown"><a href="#">Projeler <i class="fa fa-angle-down"></i></a>
                    <ul role="menu" class="sub-menu">
                        <li><a href="projeler.html">Projeler</a></li>
                        <li><a href="oyun_tasarim.html">Oyun Tasarım</a></li>
                    </ul>
                </li>
                <li class="dropdown"><a href="#">Akademik <i class="fa fa-angle-down"></i></a>
                    <ul role="menu" class="sub-menu">
                        <li><a target="_blank" href="https://avesis.ksbu.edu.tr/emre.gungor/">Avensis</a></li>
                        <li><a href="ogrenci-asistanlar.html">Asistan Öğrenciler</a></li>
                    </ul>
                </li> 
                <li class="dropdown"><a href="#">Derleyiciler<i class="fa fa-angle-down"></i></a>
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
                                        <p>&copy;  Emre GÜNGÖR 2023. All Rights Reserved. <br> Maintained By <a target="_blank" href="https://www.linkedin.com/in/mert-seyit/"><span style="font-weight:bold;">Mert Seyit Yılmaz.</span></a></p>
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
