import './header.css';
import Twrap from '../Twrap';
// import MuiWrapper from '../MuiWrapper';
// import Twrap from '../Twrap';

export default function Header() {
  return (
    <div className='hms-header'>
      <div className="hms-logo">HMS</div>
      {/* <div className="header-desktop-navigation ">&nbsp;</div> */}
      <div className="hms-navigation"><Twrap /></div>
    </div>
  )
}
