import React from 'react';
import { getItem } from '@/untils'; 

function Welcome() {
  return (<div>
    hello, {getItem('userInfo')?.userName}
  </div>);
}

export default Welcome;
