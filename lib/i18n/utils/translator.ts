let translator: (category: string) => string;

export const translate = (name: string): string => {
    if(translator) {
        return translator(name);
    }
    return name;
}

export const setTranslator = (givenTranslator: (category: string) => string): void => {
    translator = givenTranslator;
}
