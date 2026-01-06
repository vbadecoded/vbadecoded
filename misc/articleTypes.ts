type AlertColor = 'success' | 'info' | 'warning' | 'error';
type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline';
type GridSize = 'auto' | 'grow' | number | false;

export interface alertObj {
    title: string,
    severity: AlertColor
}

export interface listObj {
    primaryText: string,
    secondaryText: string,
    image?: string
}

export interface cardContentObj {
    color: string,
    variant: TypographyVariant,
    text: string,
    image?: string,
    alert?: alertObj,
    list?: listObj[],
    code?: string,
    customXs?: GridSize,
    linkTitle?: string,
    linkLocation?: string
}

export interface cardObj {
    title: string,
    contents: cardContentObj[]
}

export interface headerObj {
    title: string,
    subTitle: string,
    note: string,
    imageSrc: string,
    imageAlt: string,
    publishDate: number,
    url: string
}

export interface articleObj {
    header: headerObj
    content: cardObj[]
}

export interface videoLinkObj {
    title: string,
    link: string
}