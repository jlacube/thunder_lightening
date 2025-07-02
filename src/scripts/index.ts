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

// @ts-ignore
export const toggleDarkMode = (event: Event) => {
    // Add toggle dark mode logic here
}

export const initDarkModeToggle = () => {
    // Link dark mode toggle to the toggleDarkMode function
}