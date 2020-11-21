import { Icon } from '@iconify/react';
import wildfireIcon from '@iconify-icons/mdi/fire-alert';

const Header = () => {
    return (
        <div className="header">
            <h1>NASA's EONET API - Wildfire Tracker <Icon className="header-icon" icon={wildfireIcon} /></h1>            
        </div>
    )
}

export default Header
