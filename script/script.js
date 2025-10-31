 // Efecto de blur al hacer scroll
        const sections = document.querySelectorAll('.section');
        const navDots = document.querySelectorAll('.nav-dot');
        
        const observerOptions = {
            root: null,
            threshold: 0.5,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('blur-out');
                    
                    // Actualizar navegación activa
                    const index = Array.from(sections).indexOf(entry.target);
                    navDots.forEach((dot, i) => {
                        if (i === index) {
                            dot.classList.add('active');
                        } else {
                            dot.classList.remove('active');
                        }
                    });
                } else {
                    entry.target.classList.add('blur-out');
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });

        // Navegación con clicks en los puntos
        navDots.forEach(dot => {
            dot.addEventListener('click', () => {
                const sectionIndex = parseInt(dot.getAttribute('data-section'));
                sections[sectionIndex].scrollIntoView({ behavior: 'smooth' });
            });
        });


        // galeria de imagenes

        const galleryItems = [
            {
                id: 1,
                staticImage: 'img/1_draw.webp',
                animatedMedia: 'media/1.webp',
                title: 'Paisaje Natural',
                mediaType: 'gif'
            },
            {
                id: 2,
                staticImage: 'img/2_draw.webp',
                animatedMedia: 'media/2.webp',
                title: 'Montañas',
                mediaType: 'gif'
            },
            {
                id: 3,
                staticImage: 'img/3_draw.webp',
                animatedMedia: 'media/3.webp',
                title: 'Bosque',
                mediaType: 'gif'
            },
            {
                id: 4,
                staticImage: 'img/4_draw.webp',
                animatedMedia: 'media/4.webp',
                title: 'Lago',
                mediaType: 'gif'
            },
            {
                id: 5,
                staticImage: 'img/5_draw.webp',
                animatedMedia: 'media/5.webp',
                title: 'Aventura',
                mediaType: 'gif'
            },
            {
                id: 6,
                staticImage: 'img/6_draw.webp',
                animatedMedia: 'media/6.webp',
                title: 'Atardecer',
                mediaType: 'gif'
            },
             {
                id: 7,
                staticImage: 'img/7_draw.webp',
                animatedMedia: 'media/7.webp',
                title: 'Atardecer',
                mediaType: 'gif'
            }, {
                id: 8,
                staticImage: 'img/8_draw.webp',
                animatedMedia: 'media/8.webp',
                title: 'Atardecer',
                mediaType: 'gif'
            }
        ];

        function createImageCard(item) {
            const card = document.createElement('div');
            card.className = 'image-card';

            const staticImg = document.createElement('img');
            staticImg.className = 'static-image';
            staticImg.src = item.staticImage;
            staticImg.alt = item.title;

            let animatedElement;
            if (item.mediaType === 'video') {
                animatedElement = document.createElement('video');
                animatedElement.autoplay = true;
                animatedElement.loop = true;
                animatedElement.muted = true;
                animatedElement.playsInline = true;
            } else {
                animatedElement = document.createElement('img');
            }
            animatedElement.className = 'animated-media';
            animatedElement.src = item.animatedMedia;
            animatedElement.alt = item.title + ' animado';

            const overlay = document.createElement('div');
            overlay.className = 'overlay';
            overlay.innerHTML = `<h3>${item.title}</h3>`;

            card.appendChild(staticImg);
            card.appendChild(animatedElement);
            card.appendChild(overlay);

            return card;
        }

        const gallery = document.getElementById('gallery');
        galleryItems.forEach(item => {
            gallery.appendChild(createImageCard(item));
        });

        // Video Player Controls
        
        const video = document.getElementById('videoPlayer');
        const btn = document.getElementById('playPauseBtn');
        let hideTimeout;

        function togglePlayPause() {
            if (video.paused) {
                video.play();
                btn.classList.add('playing');
            } else {
                video.pause();
                btn.classList.remove('playing');
            }
        }

        function showButton() {
            btn.classList.remove('hide');
            clearTimeout(hideTimeout);
            
            if (!video.paused) {
                hideTimeout = setTimeout(() => {
                    btn.classList.add('hide');
                }, 300);
            }
        }

        btn.addEventListener('click', togglePlayPause);

        video.addEventListener('click', () => {
            togglePlayPause();
            showButton();
        });

        video.addEventListener('play', () => {
            btn.classList.add('playing');
            hideTimeout = setTimeout(() => {
                btn.classList.add('hide');
            }, 2000);
        });

        video.addEventListener('pause', () => {
            btn.classList.remove('playing');
            showButton();
        });

        video.addEventListener('mousemove', showButton);
        
        video.addEventListener('ended', () => {
            btn.classList.remove('playing');
            showButton();
        });



