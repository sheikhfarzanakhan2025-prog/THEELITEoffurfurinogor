// ১. কার্ডগুলো স্ক্রল করার সময় এনিমেশন (Scroll Reveal)
const observerOptions = {
    threshold: 0.1, // ১০% কার্ড দেখা গেলেই এনিমেশন শুরু হবে
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // কার্ডগুলোকে একে একে (Staggered) দেখানোর জন্য delay ব্যবহার করা হয়েছে
            setTimeout(() => {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0) scale(1)";
            }, index * 100); 
            observer.unobserve(entry.target); // একবার এনিমেশন হলে আর হবে না
        }
    });
}, observerOptions);

// শুরুতে সব কার্ড ইনভিজিবল করে দেওয়া
document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px) scale(0.95)";
    card.style.transition = "all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)";
    observer.observe(card);
});

// ২. ব্যাকগ্রাউন্ড গ্লো ইফেক্টকে ইন্টারঅ্যাক্টিভ করা (Parallax Glow)
document.addEventListener('mousemove', (e) => {
    const glow1 = document.querySelector('.glow-1');
    const glow2 = document.querySelector('.glow-2');
    
    // মাউসের পজিশন অনুযায়ী ভ্যালু বের করা
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    if(glow1 && glow2) {
        // গ্লো গুলো মাউসের বিপরীত দিকে হালকা নড়বে
        glow1.style.transform = `translate(${mouseX * 60}px, ${mouseY * 60}px)`;
        glow2.style.transform = `translate(${mouseX * -60}px, ${mouseY * -60}px)`;
    }
});

// ৩. কার্ডে ক্লিক করলে ছোট একটা পালস ইফেক্ট
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousedown', () => {
        card.style.transform = "scale(0.96) translateY(-10px)";
    });
    
    card.addEventListener('mouseup', () => {
        card.style.transform = "scale(1.02) translateY(-15px)";
    });
});

console.log("Elite 35 Premium System Loaded!");
