(function ($) {
    "use strict";
    
    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });
    
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Typed Initiate
    if ($('.hero .hero-text h2').length == 1) {
        var typed_strings = $('.hero .hero-text .typed-text').text();
        var typed = new Typed('.hero .hero-text h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
    
    
    // Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            }
        }
    });
    
    // Plans carousel
    $(".plans-carousel").owlCarousel({
        center: true,
        autoplay: false,
        dots: true,
        nav: true,
        navText: [
            '<i class="fa fa-chevron-left"></i>',
            '<i class="fa fa-chevron-right"></i>'
        ],
        loop: true,
        responsive: {
            0:{
                items:1
            }
        }
    });
    
    
    // Portfolio filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-filter li').on('click', function () {
        $("#portfolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);

function toggleInfo() {
    const info = document.getElementById("info");
    if (info.style.display === "none" || info.style.display === "") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
}

const imagenes = document.querySelectorAll('.miImagen');
imagenes.forEach(img => {
    img.addEventListener('click', () => {
        if (!img.fullscreenElement) {
            img.requestFullscreen();
        } else {
            img.exitFullscreen();
        }
    })
})

/////// navbar
document.querySelectorAll('.navbar-nav a').forEach(link => {
    link.addEventListener('click', () => {
        const navbar = document.querySelector('.navbar-collapse');
        if (navbar.classList.contains('show')) {
            navbar.classList.remove('show');
        }
    });
});

///////////////// paginacion //////////////
let pagina = 0;
const postsPorPagina = 4;
let posts = [];

// Cargar posts desde el archivo JSON
fetch("posts.json")
  .then(response => response.json())
  .then(data => {
    posts = data;
    mostrarPosts();
  });

function mostrarPosts() {
  const contenedor = document.getElementById("posts");
  const inicio = pagina * postsPorPagina;
  const fin = inicio + postsPorPagina;
  const nuevosPosts = posts.slice(inicio, fin);

  nuevosPosts.forEach(post => {
    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = `
                <div class="col-12 col-md-12">
                    <div class="blog-item wow fadeInUp" data-wow-delay="0.3s">
                        <div class="blog-img">
                            <img src="${post.imagen}"
                                alt="${post.titulo}" loading="lazy">
                        </div>
                        <div class="blog-text">
                            <h2>${post.titulo}</h2>
                            <div class="blog-meta">
                                <p><i class="far fa-user"></i>${post.autor}</p>
                                <p><i class="far fa-list-alt"></i>${post.tema}</p>
                                <p><i class="far fa-calendar-alt"></i>${post.fecha}</p>
                            </div>
                            <p>${post.contenido}</p>
                            <a class="btn" href="${post.boton}"
                                target="_blank">Leer más <i class="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>

    `;
    contenedor.appendChild(div);
  });

  if (fin >= posts.length) {
    document.getElementById("verMas").style.display = "none";
  }
}
document.getElementById("verMas").addEventListener("click", () => {
  pagina++;
  mostrarPosts();
});