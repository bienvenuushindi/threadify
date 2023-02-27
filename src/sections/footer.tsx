import React from 'react';
import SocialMedia from '../components/socialMedia';

function Footer() {
  return (
    <footer className="fixed bottom-0 h-10 bg-white  w-full text-center border">
        <SocialMedia customClasses='flex justify-center gap-4 mt-2' showIconText={false}/>
    </footer>
  )
}

export default Footer