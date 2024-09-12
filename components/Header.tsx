import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Cart from './Cart';

export default function Header() {
	const [user] = useAuthState(auth);
	const router = useRouter();

	const handleLogout = async () => {
		try {
			await auth.signOut();
			router.push('/login');
		} catch (error) {
			console.error('Error signing out:', error);
		}
	};

	return (
		<header className="bg-white shadow-md">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
				<Link href="/" className="text-2xl font-bold text-gray-800">
					Your Store Name
				</Link>
				<div className="flex items-center gap-4">
					<Cart />
					{user ? (
						<>
							<img src={user.photoURL ?? undefined} alt={user.displayName ?? ''} className="w-10 h-10 rounded-full" />
							<span>{user.displayName}</span>
							<button 
								onClick={handleLogout} 
								className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
							>
								Logout
							</button>
						</>
					) : (
						<Link href="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
							Login
						</Link>
					)}
				</div>
			</div>
		</header>
	);
}
