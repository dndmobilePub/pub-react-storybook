import React, { useEffect } from 'react';

import Button from './stories/base/Button';

function ButtonPage() {
  
  
  return (
    <div style={{width: '500px'}}>
      <div className="btnWrap grow">
          <Button
            label="기본BTN"
            onClick={() => {}}
            setPage="1st"
          />
          <Button
            label="긍정BTN"
            onClick={() => {}}
            setPage="2nd"
          />
          <Button
            label="FULL BTN"
            onClick={() => {}}
            setPage="1st"
            style="line"
            wType="full"
          />
        </div>
    </div>
  );
}

export default ButtonPage;
