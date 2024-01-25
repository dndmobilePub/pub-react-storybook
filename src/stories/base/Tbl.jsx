import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import './css/cm.common.css';
import './css/storyBook.css';


export const Table = ({setPage , captionState, caption, dataTblTitle}) => {

  let [tableHeaders, setTableHeaders] =useState([])
  let [innerTableHeaders, setinnerTableHeaders] =useState([])
  
  let CaptionState =  captionState ? 'true' : 'false' 
  let DataTblTitle =  dataTblTitle ? 'true' : 'false' 
  
  const obj = {
    header: ["제목1-1", "제목1-2", "제목1-3"],
    data: [
      { id:"1", cont1_1: "내용1_1", cont1_2: "내용1_2", cont1_3: "내용1_3", },
      { id:"2", cont1_1: "내용2_1", cont1_2: "내용2_2", cont1_3: "내용2_3", },
    ],
  }
  const obj2 = {
    header: ["제목2-1", "제목2-2", "제목2-3"],
    data: [
      { id:"1", cont1_1: "내용3_1", cont1_2: "내용3_2", cont1_3: "내용3_3",},
    ],
  }
  
  // thead 내의 모든 th에 scope="col" 또는 tbody 내의 모든 th에 scope="row" 설정
  const [isColScope, setIsColScope] = useState(true);
  const setScopeAttributes = () => {
    const selector = isColScope ? 'table thead th' : 'table tbody th'
    
    document.querySelectorAll(selector).forEach((th) => {
      th.setAttribute('scope', isColScope ? 'col' : 'row')
    })
  }
  
  // summary 속성 제거
  const summaryRef = useRef(null)
  const removeSummary = () => {
    if (summaryRef.current) {
      summaryRef.current.removeAttribute('summary');
    }
  }
  
  
  useEffect(() => {
    //제목 셀에 scope 추가
    const thElements = document.querySelectorAll('tbody > tr > th');
    const scopeValues = Array.from(thElements).map(th => th.textContent);
    
    setTableHeaders([...obj.header, scopeValues]);
    setinnerTableHeaders(obj2.header)
    setScopeAttributes()
    removeSummary()
  }, [setPage])

 


  switch (setPage){

    case 'Base':
      return (
        <div className='cp-content storybook'>
          <div className='splitWrap'>
            <div className='tblExWrap'>
              <p>CASE 1 : 데이터 테이블 기본</p>
              <table ref={summaryRef} summary='삭제됐나?' data-tbl={dataTblTitle}>

                {CaptionState === 'true' ? (<caption className="processedCaption">{tableHeaders}로 구성된 표</caption>)
                : (<caption className="processedCaption">{caption}</caption>)}

                <thead>
                  <tr>
                    {obj.header.map((item) => {
                      return <th key={item}>{item}</th>
                    })}
                  </tr>
                </thead>
                <tbody>
                  {obj.data.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.cont1_1}</td>
                        <td>{item.cont1_2}</td>
                        <td>{item.cont1_3}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )

    case 'InnerTbl':
      return (
        <div className='cp-content storybook'>
          <div className='splitWrap'>
            <div className='tblExWrap'>
              <p>CASE 2: 테이블 안에 테이블</p>
              <table ref={summaryRef} summary='삭제됐나?' >
                <caption className="processedCaption">{tableHeaders}로 구성된 표</caption>
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
                        <td>{item.cont1_1}</td>
                        <td>{item.cont1_2}</td>
                        <td>{item.cont1_3}</td>
                      </tr>
                    );
                  })}
                  {obj2.data && obj2.data.length > 0 ? (
                    obj2.data.map((item) => {//innerHtml 노출
                      return (
                        <tr key={item.id}>
                          <td>{item.cont1_1}</td>
                          <td>{item.cont1_2}</td>
                          <td>
                            <table>
                              <caption className="processedCaption">{tableHeaders}로 구성된 표</caption>
                              <thead>
                                <tr>
                                  {obj2.header.map((item) => {
                                    return <th key={item}>{item}</th>;
                                  })}
                                </tr>
                              </thead>
                              <tbody>
                                <tr key={item.id}>
                                  <th>{item.cont1_1}</th>
                                  <td>{item.cont1_2}</td>
                                  <td>{item.cont1_3}</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      );
                    })
                  ) : (//obj2 데이터 값 없을때
                    <tr>
                      <td colSpan={3}>내용이 없습니다.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )

    case 'TitleTbl':
      return (
        <div className='cp-content storybook'>
          <div className='splitWrap'>
            <div className='tblExWrap'>
              <p>CASE 3 : caption에 제목과 내용을 분리적용</p>
              <table ref={summaryRef} summary='삭제됐나?' data-tbl={dataTblTitle}>
              
                {CaptionState === 'true' ? (<caption className="processedCaption">
                  {DataTblTitle === 'true' ? (<strong>{dataTblTitle}</strong>): ('')}<p>{tableHeaders}로 구성된 표</p></caption>)
                : (<caption className="processedCaption">{DataTblTitle === 'true' ? (<strong>{dataTblTitle}</strong>): ('')}<p>{caption}</p></caption>)}

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
                        <td>{item.cont1_1}</td>
                        <td>{item.cont1_2}</td>
                        <td>{item.cont1_3}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )

    case 'ScopeTbl':
      return (
        <div className='cp-content storybook'>
          <div className='splitWrap'>
            <div className='tblExWrap'>
              <p>CASE 1 : 데이터 테이블 기본</p>
              <table ref={summaryRef} summary='삭제됐나?' data-tbl={dataTblTitle}>

                {CaptionState === 'true' ? (<caption className="processedCaption">{tableHeaders}로 구성된 표</caption>)
                : (<caption className="processedCaption">{caption}</caption>)}

                <thead>
                  <tr>
                    {obj.header.map((item) => {
                      return <th key={item}>{item}</th>
                    })}
                  </tr>
                </thead>
                <tbody>
                  {obj.data.map((item) => {
                    return (
                      <tr key={item.id}>
                        <th>{item.cont1_1}</th>
                        <td>{item.cont1_2}</td>
                        <td>{item.cont1_3}</td>
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



