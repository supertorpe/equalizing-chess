export const textToImages = (text: string) => {
    const result: string[] = [];
    const words = text.split(" ");
    let cont = 1;
    let themeColor = document.querySelector('html')?.classList.contains('ion-theme-dark') ? 'w' : 'b';
    let color = 'w';
    words.forEach(word => {
        let image;
        word = word.toUpperCase();
        if (word == 'ONE') {
            cont = 1;
        } else if (word == 'TWO') {
            cont = 2;
        } else if (word == 'THREE') {
            image = `${themeColor}3.svg`;
            result.push(image);
            cont = 1;
        } else if (word == 'FOUR') {
            image = `${themeColor}4.svg`;
            result.push(image);
            cont = 1;
        } else if (word == 'FIVE') {
            image = `${themeColor}5.svg`;
            result.push(image);
            cont = 1;
        } else if (word == 'VS') {
            image = `${themeColor}swords.svg`;
            result.push(image);
            color = 'b';
        } else if (word.lastIndexOf('KING', 0) === 0) {
            for (let x = cont; x > 0; x--) {
                image = `${color}K.svg`
                result.push(image);
            }
            cont = 1;
        } else if (word.lastIndexOf('QUEEN', 0) === 0) {
            for (let x = cont; x > 0; x--) {
                image = `${color}Q.svg`
                result.push(image);
            }
            cont = 1;
        } else if (word.lastIndexOf('ROOK', 0) === 0) {
            for (let x = cont; x > 0; x--) {
                image = `${color}R.svg`
                result.push(image);
            }
            cont = 1;
        } else if (word.lastIndexOf('BISHOP', 0) === 0) {
            for (let x = cont; x > 0; x--) {
                image = `${color}B.svg`
                result.push(image);
            }
            cont = 1;
        } else if (word.lastIndexOf('KNIGHT', 0) === 0) {
            for (let x = cont; x > 0; x--) {
                image = `${color}N.svg`
                result.push(image);
            }
            cont = 1;
        } else if (word.lastIndexOf('PAWN', 0) === 0) {
            for (let x = cont; x > 0; x--) {
                image = `${color}P.svg`
                result.push(image);
            }
            cont = 1;
        }
    });
    return result;
};

export const urlIcon = (icon: string, pieceTheme: string) => {
    return `assets/pieces/${pieceTheme}/${icon}`;
};

export const ariaDescriptionFromIcon = (icon: string) => {
    if (icon.endsWith('3.svg')) return 'three';
    else if (icon.endsWith('4.svg')) return 'four';
    else if (icon.endsWith('5.svg')) return 'five';
    else if (icon.endsWith('elementary.svg')) return 'elementary';
    else if (icon.endsWith('swords.svg')) return 'against';
    else if (icon.endsWith('B.svg')) return 'bishop';
    else if (icon.endsWith('K.svg')) return 'king';
    else if (icon.endsWith('N.svg')) return 'knight';
    else if (icon.endsWith('P.svg')) return 'pawn';
    else if (icon.endsWith('Q.svg')) return 'queen';
    else if (icon.endsWith('R.svg')) return 'rook';
    else return 'unknown';
};

export const clone = (object: any) => {
    return JSON.parse(JSON.stringify(object));
};

const setTitle = (newTitle: string) => {
    window.document.title = newTitle;
};

const setMeta = (name: string, newValue: string) => {
    (window.document.getElementsByName(name)[0] as HTMLMetaElement).content = newValue;
}

export const setupSEO = (template: string, params: any) => {
    const page = template.replace('.html', '');
    setTitle(window.AlpineI18n.t(`${page}.seo.title`, params));
    setMeta('description', window.AlpineI18n.t(`${page}.seo.meta_description`, params));
};