import './header.css';
import Twrap from '../Twrap';
// import MuiWrapper from '../MuiWrapper';
// import Twrap from '../Twrap';

export default function Header() {
  return (
    <div className='flex hms-header'>
      <div className="brand-logo">HMS</div>
      <div className="header-desktop-navigation ">&nbsp;</div>
      <div className="header-navigation"><Twrap /></div>
    </div>
  )
}
