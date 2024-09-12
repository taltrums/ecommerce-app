import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../config/firebase';

export default function LoginContent() {
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Error signing in with Google', error);
    }
  };

  return (
    <div className="absolute right-0 top-0 bottom-0 w-full sm:w-96 bg-white bg-opacity-90 p-8 flex flex-col justify-center shadow-xl">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Welcome to Our E-Commerce Store</h1>
      <p className="text-center text-gray-600 mb-8">Find the best products at unbeatable prices!</p>
      
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Get Started</h2>
        <p className="text-gray-600">Sign in to access exclusive deals and start shopping.</p>
        <button
          onClick={signInWithGoogle}
          className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150"
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            <path d="M1 1h22v22H1z" fill="none"/>
          </svg>
          <span>Sign in with Google</span>
        </button>
      </div>
      
      <div className="text-center mt-6">
        <p className="text-sm text-gray-600">By signing in, you agree to our Terms of Service and Privacy Policy.</p>
      </div>
    </div>
  );
}
