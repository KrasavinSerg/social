import React from 'react';
import s from './ProfileInfo.module.scss';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div className={s.profile_info}>
      <img src='https://graphictwister.com/wp-content/uploads/2016/04/top-new-macbook-workspace.jpg' alt='workspace' />
      <div className={s.profile_info_disc}>
        <img src={props.profile.photos.small} alt='avatar' />
        ava + disc
      </div>
    </div>
  );
}

export default ProfileInfo;