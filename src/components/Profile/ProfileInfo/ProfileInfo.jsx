import React from 'react';
import s from './ProfileInfo.module.scss';

const ProfileInfo = () => {
  return (
    <div className={s.profile_info}>
      <img src='https://graphictwister.com/wp-content/uploads/2016/04/top-new-macbook-workspace.jpg' alt='workspace'/>
      <div className={s.profile_info_disc}>
        ava + disc
      </div>
    </div>
  );
}

export default ProfileInfo;