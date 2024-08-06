import Link from 'next/link';

const Header = () => {
    return (
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/support">Support</Link></li>
                <li><Link href="/store">Store</Link></li>
                <li><Link href="/about">About</Link></li>
            </ul>
        </nav>
    );
};