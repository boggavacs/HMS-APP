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

export default function Twrap() {
  return (
    <div className="header-nav-icons">
      <Login />
      <Menu />
    </div>
  );
}