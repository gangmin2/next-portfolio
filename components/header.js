import Nav from './nav';

export default function Header() {
    return (
        <header className='w-full flex align-center justify-center fixed left-1/2 -translate-x-1/2 z-10'>
            <Nav />
        </header>
    )
}