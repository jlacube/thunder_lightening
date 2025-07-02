import {SUPPORTED_TYPES, SupportedLanguage} from "./types.ts";

const DEFAULT_LANG: SupportedLanguage = 'en';


const getValue = (translation: Record<string, object>, key: string): string | null => {
    const keys = key.split('.');
    let tmp = translation;
    for (const key of keys) {
        tmp = tmp[key] as Record<string, object>;
        if (!tmp) {
            return null;
        }
    }
    return tmp as unknown as string;
}

export const loadLanguage = async (lang: SupportedLanguage) => {
    let json;
    try {
        json = await import(`../translations/${lang}.json`);
    } catch (e) {
        console.warn(`No translation file found for '${lang}', switch to '${DEFAULT_LANG}'`);
        json = await import(`../translations/${DEFAULT_LANG}.json`)
    }
    const translations = json.default;

    const elements = document.querySelectorAll('[data-translate-key]') as unknown as HTMLElement[];

    for (const element of elements) {
        const value = getValue(translations, element.dataset.translateKey!);
        if (!value) {
            console.warn(`No translation found for '${element.dataset.translateKey}'`);
            continue;
        }
        element.innerText = value;
    }

    document.getElementById(`lang-link-${lang}`)?.classList.add('nj-header__head-link--active');
}

export const getLang = (): SupportedLanguage => {
    const lang = new URLSearchParams(document.location.search).get('lang');
    if (lang && SUPPORTED_TYPES.includes(lang as SupportedLanguage)) {
        return lang as SupportedLanguage;
    }
    return DEFAULT_LANG;
}