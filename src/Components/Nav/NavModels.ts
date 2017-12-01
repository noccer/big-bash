export interface NavLink {
    url: string;
    label: string;
}

export const NavLinks: NavLink[] = [
    {
        url: '/',
        label: 'Home'
    },
    {
        url: '/blog',
        label: 'Blog'
    },
    {
        url: '/contact',
        label: 'Contact'
    }
];