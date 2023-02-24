import React from 'react';
import SocialMedia from '../components/socialMedia';

function Footer() {
  return (
    <footer className="fixed bottom-0 h-8 bg-white  w-full text-center border">
      <ul>
        <SocialMedia customClasses='flex justify-center gap-4 pt-1' showIconText={false}/>
      </ul>
    </footer>
  )
}

export default Footer