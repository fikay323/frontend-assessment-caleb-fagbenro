import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Only add headers for the listing page (root path)
  if (request.nextUrl.pathname === '/') {
    const response = NextResponse.next();
    // Exposing a custom cache-status header (the CDN edge will overwrite or add Cf-Cache-Status)
    response.headers.set('x-cache-status', 'enabled');
    return response;
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/'],
};
