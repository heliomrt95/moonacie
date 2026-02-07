/**
 * SERENATA D'AUTORE - Site vitrine Giuseppe
 * JavaScript principal
 */

// ==========================================================================
// CONFIGURATION
// ==========================================================================

const CONFIG = {
    // Numéro WhatsApp
    whatsappNumber: '393347522369',
    
    // Message WhatsApp par défaut
    whatsappMessage: 'Ciao! Vorrei informazioni sulla serenata.'
};

// ==========================================================================
// VIDÉOS - Contrôles personnalisés avec lazy loading
// ==========================================================================

class VideoManager {
    constructor() {
        this.init();
    }
    
    init() {
        this.initVideoPreloadOnScroll();
        this.initCustomControls();
        this.initGridVideos();
    }
    
    // Charger les vidéos de la grille quand elles entrent dans le viewport
    initVideoPreloadOnScroll() {
        const gridWrappers = document.querySelectorAll('.video-grid .video-wrapper, .video-reviews .video-wrapper');
        if (!('IntersectionObserver' in window) || gridWrappers.length === 0) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const wrapper = entry.target;
                const video = wrapper.querySelector('video');
                if (!video || wrapper.dataset.preloaded === 'true') return;
                
                wrapper.dataset.preloaded = 'true';
                video.preload = 'auto';
                video.load();
                observer.unobserve(wrapper);
            });
        }, { rootMargin: '100px', threshold: 0.1 });
        
        gridWrappers.forEach(w => observer.observe(w));
    }
    
    initCustomControls() {
        document.querySelectorAll('.video-wrapper').forEach(wrapper => {
            const video = wrapper.querySelector('video');
            if (!video) return;
            
            video.muted = false;
            const playBtn = wrapper.querySelector('.video-play-btn');
            const progressFilled = wrapper.querySelector('.video-progress__filled');
            const muteBtn = wrapper.querySelector('.video-mute-btn');
            
            // Indicateur de chargement pendant le buffering
            video.addEventListener('waiting', () => wrapper.classList.add('buffering'));
            video.addEventListener('playing', () => wrapper.classList.remove('buffering'));
            video.addEventListener('canplay', () => wrapper.classList.remove('buffering'));
            
            if (playBtn) {
                playBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.togglePlay(video, playBtn, wrapper);
                });
            }
            
            video.addEventListener('click', () => this.togglePlay(video, playBtn, wrapper));
            
            video.addEventListener('timeupdate', () => {
                if (progressFilled && video.duration && isFinite(video.duration)) {
                    progressFilled.style.width = `${(video.currentTime / video.duration) * 100}%`;
                }
            });
            
            if (muteBtn) {
                muteBtn.classList.remove('muted');
                muteBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    video.muted = !video.muted;
                    muteBtn.classList.toggle('muted', video.muted);
                });
            }
            
            video.addEventListener('ended', () => {
                wrapper.classList.remove('playing', 'buffering');
                if (playBtn) playBtn.classList.remove('playing');
                if (progressFilled) progressFilled.style.width = '0%';
            });
        });
    }
    
    initGridVideos() {
        // Pour les vidéos dans les grilles (créer les contrôles dynamiquement)
        document.querySelectorAll('.video-grid__item, .video-reviews__item').forEach(item => {
            if (item.querySelector('.video-wrapper')) return;
            
            const video = item.querySelector('video');
            if (!video) return;
            
            // Son activé par défaut
            video.muted = false;
            
            // Créer le wrapper
            const wrapper = document.createElement('div');
            wrapper.className = 'video-wrapper';
            video.parentNode.insertBefore(wrapper, video);
            wrapper.appendChild(video);
            
            // Créer le bouton play
            const playBtn = document.createElement('button');
            playBtn.className = 'video-play-btn';
            playBtn.setAttribute('aria-label', 'Lecture');
            playBtn.innerHTML = `
                <svg class="icon-play" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                <svg class="icon-pause" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
            `;
            wrapper.appendChild(playBtn);
            
            // Créer la barre de contrôles avec mute
            const controls = document.createElement('div');
            controls.className = 'video-controls';
            controls.innerHTML = `
                <button class="video-mute-btn" aria-label="Son">
                    <svg class="icon-sound" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
                    <svg class="icon-muted" viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>
                </button>
                <div class="video-progress">
                    <div class="video-progress__filled"></div>
                </div>
            `;
            wrapper.appendChild(controls);
            
            const progressFilled = controls.querySelector('.video-progress__filled');
            const muteBtn = controls.querySelector('.video-mute-btn');
            
            // Events
            playBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.togglePlay(video, playBtn, wrapper);
            });
            
            video.addEventListener('click', () => {
                this.togglePlay(video, playBtn, wrapper);
            });
            
            video.addEventListener('timeupdate', () => {
                if (progressFilled && video.duration && isFinite(video.duration)) {
                    const percent = (video.currentTime / video.duration) * 100;
                    progressFilled.style.width = `${percent}%`;
                }
            });
            
            muteBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                video.muted = !video.muted;
                muteBtn.classList.toggle('muted', video.muted);
            });
            
            video.addEventListener('ended', () => {
                wrapper.classList.remove('playing');
                playBtn.classList.remove('playing');
                if (progressFilled) progressFilled.style.width = '0%';
            });
        });
    }
    
    togglePlay(video, playBtn, wrapper) {
        // Pause toutes les autres vidéos
        document.querySelectorAll('video').forEach(v => {
            if (v !== video && !v.paused) {
                v.pause();
                const otherWrapper = v.closest('.video-wrapper');
                const otherBtn = otherWrapper?.querySelector('.video-play-btn');
                if (otherWrapper) otherWrapper.classList.remove('playing');
                if (otherBtn) otherBtn.classList.remove('playing');
            }
        });
        
        if (video.paused) {
            video.play();
            if (wrapper) wrapper.classList.add('playing');
            if (playBtn) playBtn.classList.add('playing');
        } else {
            video.pause();
            if (wrapper) wrapper.classList.remove('playing');
            if (playBtn) playBtn.classList.remove('playing');
        }
    }
}

// ==========================================================================
// WHATSAPP LINKS
// ==========================================================================

class WhatsAppManager {
    constructor() {
        this.links = document.querySelectorAll('.whatsapp-btn');
        this.init();
    }
    
    init() {
        this.links.forEach(link => {
            // Générer l'URL WhatsApp
            const message = link.dataset.message || CONFIG.whatsappMessage;
            const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
            link.href = url;
        });
    }
}

// ==========================================================================
// ANIMATIONS AU SCROLL
// ==========================================================================

class ScrollAnimations {
    constructor() {
        this.elements = document.querySelectorAll('.fade-in-scroll');
        this.init();
    }
    
    init() {
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1
            });
            
            this.elements.forEach(el => observer.observe(el));
        } else {
            // Fallback: afficher directement
            this.elements.forEach(el => el.classList.add('fade-in'));
        }
    }
}

// ==========================================================================
// SMOOTH SCROLL
// ==========================================================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ==========================================================================
// INITIALISATION
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Vidéos
    new VideoManager();
    
    // WhatsApp
    new WhatsAppManager();
    
    // Animations
    new ScrollAnimations();
    
    // Smooth scroll pour les ancres
    initSmoothScroll();
});
