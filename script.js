// ملف الجافا سكريبت الخاص باللاندنج بيج - مؤسسة الإتقان

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. فتح وإغلاق قائمة الموبايل التفاعلية
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            
            // تغيير شكل الأيقونة عند الفتح والإغلاق
            const icon = menuToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // إغلاق القائمة عند الضغط على أي رابط لتسهيل التصفح
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.querySelector('i').classList.remove('fa-xmark');
                menuToggle.querySelector('i').classList.add('fa-bars');
            });
        });

        // إغلاق القائمة لو العميل ضغط في أي مكان برة القائمة
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                menuToggle.querySelector('i').classList.remove('fa-xmark');
                menuToggle.querySelector('i').classList.add('fa-bars');
            }
        });
    }

    // 2. تفعيل تأثير الهيدر الملتصق عند التمرير (Sticky Header effect)
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. تحديد الرابط النشط تلقائياً بناءً على السيكشن المعروض (Scroll Spy)
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        let scrollY = window.pageYOffset;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100; // الإزاحة لتناسب ارتفاع الهيدر
            const sectionId = current.getAttribute('id');
            const targetLink = document.querySelector(`.nav-menu a[href*=${sectionId}]`);
            
            if (targetLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
                    targetLink.classList.add('active');
                }
            }
        });
        
        // لو العميل رجع لأول الصفحة، خلي رابط "الرئيسية" هو النشط
        if (scrollY < 100) {
            document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
            const homeLink = document.querySelector('.nav-menu a[href="#"]');
            if (homeLink) homeLink.classList.add('active');
        }
    });
});
