import Link from 'next/link'

export default function Navigation() {
    return (
        <div className='top-bar'>
            <div className='logo'>
                <img src="./images/logo.png" alt="Justin Pfeiffer Logo" />
            </div>
            <div className='navigation-desktop'>
                <ul>
                    <li><Link href='#'>Home</Link></li>
                    <li><Link href='#'>About Me</Link></li>
                    <li><h6>Case Studies</h6>
                        <ul>
                            <li><Link href="#">eMoney UI Redesign</Link></li>
                            <li><Link href='#'>Quay Prescription Platofrm</Link></li>
                            <li><Link href='#'>Incentive Money Movement</Link></li>
                            <li><Link href='#'>Inventory Management App</Link></li>
                            <li><Link href='#'>Techno Gears</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className='navigation-mobile'>
                <ul>
                    <li><Link href='#'>Home</Link></li>
                    <li><Link href='#'>About Me</Link></li>
                    <li><h6>Case Studies</h6></li>
                    <li><Link href="#">eMoney UI Redesign</Link></li>
                    <li><Link href='#'>Quay Prescription Platofrm</Link></li>
                    <li><Link href='#'>Incentive Money Movement</Link></li>
                    <li><Link href='#'>Inventory Management App</Link></li>
                    <li><Link href='#'>Techno Gears</Link></li>
                </ul>
            </div>
        </div>
    );
}

