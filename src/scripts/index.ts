export const scrollToNextSite = () => {
    document.querySelector('.sites__cards')!.scrollLeft += 400
}

export const scrollToPreviousSite = () => {
    document.querySelector('.sites__cards')!.scrollLeft -= 400
}

export const initSiteCardNavigation = (previousId: string, nextId: string) => {
    const previousButton = document.getElementById(previousId);
    const nextButton = document.getElementById(nextId);
    
    if (previousButton) {
        previousButton.addEventListener('click', scrollToPreviousSite);
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', scrollToNextSite);
    }
}

export const toggleDarkMode = (event: Event) => {
    const body = document.body;
    const checkbox = event.target as HTMLInputElement;
    
    if (checkbox.checked) {
        body.setAttribute('data-theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
    }
}

export const initDarkModeToggle = () => {
    const toggle = document.getElementById('toggle-dark-mode') as HTMLInputElement;
    if (toggle) {
        toggle.addEventListener('change', toggleDarkMode);
    }
}