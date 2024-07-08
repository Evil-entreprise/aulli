import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Aulli',
    short_name: 'Aulli',
    description: 'Aulli: The Ultimate Hub for Freelancers and SMBs',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#47C826',
    icons: [
      {
        src: './favicon.ico',
        sizes: '32x28',
        type: 'image/x-icon',
      },
      {
        src: '/icons/logo-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/logo-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    lang: 'en-US',
  };
}
