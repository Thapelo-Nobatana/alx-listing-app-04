export interface ButtonProps {
    label: string;
    style: string;
    onClick: () => void;
    disabled?: boolean;
    variant?: 'primary' | 'secondary' | 'tertiary';
    size?: 'small' | 'medium' | 'large';
}

export interface CardProps {
    title: string;
    description: string;
    image: string;
}

export interface PropertyProps {
    
    name: string ,
    address: { state: string ,city: string, country: string} ,
    rating: number ,
    category: [string, string, string],
    price: number,
    offers: object,
    image: string,
    discount: string
    
}

export interface PillProps {
    label: string;
    active?: boolean;
    onClick?: (label: string) => void;
}