export const scrollToNextSite = () => {
    document.querySelector('.sites__cards')!.scrollLeft += 400
}

export const scrollToPreviousSite = () => {
    document.querySelector('.sites__cards')!.scrollLeft -= 400
}

// @ts-ignore
export const initSiteCardNavigation = (previousId: string, nextId: string) => {
    // Link arrows to carousel
}

// @ts-ignore
export const toggleDarkMode = (event: Event) => {
    // Add toggle dark mode logic here
}

export const initDarkModeToggle = () => {
    // Link dark mode toggle to the toggleDarkMode function
}