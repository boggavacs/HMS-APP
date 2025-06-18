'use client';

// import React from 'react'

// interface wrapperProps {
//     styles?: React.CSSProperties;
//     className?: string;
// }

// interface TwrapChildrent extends wrapperProps {
//     children?: React.ReactNode;
// }

// export default function Twrap(props: TwrapChildrent) {
//   return (
//     <div style={props.styles} className={props.className}>
//         {props.children}
//     </div>
//   )
// }

import { Login, Menu } from '@mui/icons-material';
import '../components/header/header.css';


interface Menu{
  menu: {
    icon: React.ReactNode;
    label: string;
  }[]; 
}

export default function Twrap(props: any) {
  return (
    <div className="header-nav-icons">
      <Login />
      <Menu />
    </div>
  );
}