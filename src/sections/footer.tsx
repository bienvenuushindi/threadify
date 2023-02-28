import React from 'react';
import SocialMedia from '../components/socialMedia';

function Footer() {
  return (
    <footer className="fixed bg-blue-400 bottom-0 h-10 z-20   w-full text-center border-t border-gray-200">
        <SocialMedia customClasses='flex justify-center gap-4 mt-2' showIconText={false}/>
    </footer>
  )
}

export default Footer