import { authConfig } from '@/auth.config';
import NextAuth from 'next-auth';

// Initialize NextAuth with the configuration and export the auth middleware
export const { auth } = NextAuth({
  ...authConfig,
  // Ensure we're not using any OpenID client in the browser
  debug: process.env.NODE_ENV === 'development',
  secret: process.env.NEXTAUTH_SECRET,
  // Disable any OpenID client usage in the browser
  session: {
    strategy: 'jwt',
  },
  // Add error handling
  events: {
    async error(error: Error) {
      console.error('Authentication error:', error);
    },
  },
});

// Export the middleware configuration
export const config = {
  // Match all request paths except for the ones starting with:
  // - api (API routes)
  // - _next/static (static files)
  // - _next/image (image optimization files)
  // - favicon.ico (favicon file)
  // - public folder
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};

// Export the auth middleware as default
export default auth((req: any) => {
  // This is where you can add additional middleware logic if needed
  return null; // Return null to continue with the request
});
