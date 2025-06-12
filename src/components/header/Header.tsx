import './header.css';
import Twrap from '../Twrap';
// import MuiWrapper from '../MuiWrapper';
// import Twrap from '../Twrap';

export default function Header() {
  return (
    <div className='border-2 flex flex-cols border-2 border-primary'>
      <div className="brand-logo">HMS</div>
      <div className="header-desktop-navigation ">&nbsp;</div>
      <div className=""><Twrap /></div>
    </div>
  )
}
