// ============================================
// COMPONENT HUNT — SCRIPT
// Assignment 6 | 05/03/2026
// ============================================

// ============================================
// FILTER TABS — Component Catalogue
// ============================================

const tabs = document.querySelectorAll(".tab");
const cards = document.querySelectorAll(".comp-card");

tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
        // Update active tab
        tabs.forEach(function (t) { t.classList.remove("active"); });
        this.classList.add("active");

        const filter = this.getAttribute("data-filter");

        // Show / hide component cards
        cards.forEach(function (card) {
            const type = card.getAttribute("data-type");
            if (filter === "all" || type === filter) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }
        });
    });
});

// ============================================
// WIREFRAME — Hover Tooltip
// ============================================

const wfBlocks = document.querySelectorAll(".wf-block");

wfBlocks.forEach(function (block) {
    block.addEventListener("mouseenter", function () {
        const tag = this.querySelector(".wf-tag");
        if (tag) tag.style.background = "#10b981";
    });
    block.addEventListener("mouseleave", function () {
        const tag = this.querySelector(".wf-tag");
        if (tag) tag.style.background = "";
    });
});

// ============================================
// TREE NODES — Click to Highlight
// ============================================

const treeNodes = document.querySelectorAll(".tree-node");

treeNodes.forEach(function (node) {
    node.addEventListener("click", function () {
        // Remove highlight from all
        treeNodes.forEach(function (n) { n.style.outline = ""; });
        // Highlight clicked
        this.style.outline = "2px solid #6c63ff";
        this.style.outlineOffset = "2px";
    });
});

// ============================================
// SCROLL REVEAL ANIMATION
// ============================================

const observer = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.1 }
);

const animTargets = document.querySelectorAll(
    ".info-card, .comp-card, .learning-card, .tree-branch, .wf-block"
);

animTargets.forEach(function (el, i) {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.5s ease " + (i * 0.04) + "s, transform 0.5s ease " + (i * 0.04) + "s";
    observer.observe(el);
});

// ============================================
// CONSOLE LOG — Summary
// ============================================

console.log("======================================");
console.log("   COMPONENT HUNT — NETFLIX          ");
console.log("   Assignment 6 | 05/03/2026         ");
console.log("======================================");
console.log("");
console.log("Target Website : netflix.com");
console.log("");
console.log("Components Identified :");
console.log("  1.  <Navbar />           — Layout");
console.log("  2.  <Logo />             — UI Element");
console.log("  3.  <NavLinks />         — UI Element");
console.log("  4.  <SearchBar />        — Interactive");
console.log("  5.  <NotificationBell /> — Interactive");
console.log("  6.  <UserAvatar />       — UI Element");
console.log("  7.  <HeroBanner />       — Content");
console.log("  8.  <TrendingBadge />    — UI Element");
console.log("  9.  <PlayButton />       — Interactive");
console.log("  10. <MoreInfoButton />   — Interactive");
console.log("  11. <ContentSection />   — Layout");
console.log("  12. <ContentRow />       — Layout");
console.log("  13. <MovieCard />        — Content");
console.log("  14. <Thumbnail />        — UI Element");
console.log("  15. <PlayOverlay />      — Interactive");
console.log("  16. <AddToListBtn />     — Interactive");
console.log("  17. <LikeButton />       — Interactive");
console.log("  18. <ProgressBar />      — UI Element");
console.log("  19. <RankBadge />        — UI Element");
console.log("  20. <Footer />           — Layout");
console.log("  21. <FooterLinks />      — UI Element");
console.log("  22. <Copyright />        — UI Element");
console.log("");
console.log("Total Components Found : 22");
console.log("======================================");
