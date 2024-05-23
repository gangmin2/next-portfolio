import Nav from './nav';
import DarkModeToggle from '../components/darkModeToggle';

export default function Header() {
    return (
        <header className='w-full flex align-center justify-center fixed left-1/2 -translate-x-1/2 z-10'>
            <Nav />
            <DarkModeToggle />
        </header>
    )
}