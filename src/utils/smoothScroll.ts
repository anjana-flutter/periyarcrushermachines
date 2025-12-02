export const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
        const headerOffset = 80; // Height of sticky navbar
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
};

export const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    smoothScrollTo(targetId);

    // Update URL without scrolling
    window.history.pushState(null, '', href);
};
