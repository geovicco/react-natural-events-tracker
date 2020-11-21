import { Icon } from '@iconify/react';
import wildfireIcon from '@iconify-icons/mdi/fire-alert';

const LocationMarker = ({ onClick }) => {
    return (
        <div className='wildfire-marker' onClick={onClick}>
            <Icon icon={wildfireIcon} className='wildfire-icon'/>
        </div>
    )
}

export default LocationMarker
