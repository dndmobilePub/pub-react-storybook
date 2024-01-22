import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import './css/cm.common.css';
import './css/storyBook.css';


export const Table = ({setPage}) => {

  let [tableHeaders, setTableHeaders] =useState([])

  const obj = {
    header: ["제목1-1", "제목1-2", "제목1-3"],
    data: [
      { id:"1", cont: "내용", cont2: "내용", cont3: "내용" },
      { id:"2", cont: "내용", cont2: "내용", cont3: "내용" },
    ],
  };
  
  useEffect(() => {
    setTableHeaders(obj.header);
  }, [setPage]);
 

  switch (setPage){

    case 'Base':
      return (
        <div className='cp-content storybook'>
          <div className='splitWrap'>
            <div className='tblExWrap'>
              <table>
                <caption class="processedCaption"><strong>{tableHeaders}</strong>로 구성된 표</caption>
                <thead>
                  <tr>
                    {obj.header.map((item) => {
                      return <th key={item}>{item}</th>;
                    })}
                  </tr>
                </thead>
                <tbody>
                  {obj.data.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.cont}</td>
                        <td>{item.cont2}</td>
                        <td>{item.cont3}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )

  }

  
};


// Docs 문서 작성 영역
Table.propTypes = {
};

// Docs 기본값
Table.defaultProps = {
  
};

