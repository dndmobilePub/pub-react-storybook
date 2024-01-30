import React from 'react';
// import PropTypes from 'prop-types';

// scss&css import
import './scss/cm.common.scss';
import './scss/storyBook.scss';

/*
 * 파라미터 설명
 * setPage - 카테고리 화면별 스토리 이름
 * checked - checked 속성 on/ off
 * readonly - readonly 속성 on/off
 * disabled - disabled 속성 on/off
 */

/** 
 * Raido 컴포넌트 정의
 */

export const Raido = ({setPage, checked, readonly, disabled }) => {
  const Disable = disabled ? 'disabled' : '';
  const Checked = checked ? 'checked' : '';
  const Readonly = readonly ? 'readonly' : 'false';
  const Txt = setPage ? setPage : '' 

  switch (setPage){

    case 'Base':
    return (
      <div className='cp-content'>

        <div className="field">
          <div className="field-group">
            <label className="field-radio">
                { 
                  readonly === true ? <input type="radio" 
                  disabled = {Disable}
                  checked = {Checked}
                  readonly = {Readonly}
                  />
                  : <input type="radio" 
                  disabled = {Disable}
                  checked = {Checked}
                  />
                }
              <i className="field-icon"></i>
              <span className="field-label">
                {Txt + ' Raido'}
              </span>
            </label>
          </div>
        </div>
      </div>
    )

    case 'Circle':
    return (
      <div className='cp-content'>
        <div className={"field " + setPage}>
          <div className="field-group">
            <label className="field-radio">
                <input type="checkbox"  name="rdoGroup"/>
              <i className="field-icon"></i>
              <span className="field-label">미체크</span>
            </label>
            <label className="field-radio">
              <input type="radio" checked="checked" name="rdoGroup"/>
              <i className="field-icon"></i>
              <span className="field-label">체크</span>
            </label>
            <label className="field-radio">
              <input type="radio" readonly="readonly" name="rdoGroup"/>
              <i className="field-icon"></i>
              <span className="field-label">readonly</span>
            </label>
            <label className="field-radio">
              <input type="radio" disabled="disabled" name="rdoGroup"/>
              <i className="field-icon"></i>
              <span className="field-label">disabled</span>
            </label>
          </div>
        </div>
      </div>
    )
    
    case 'box type1':
    return (
      <div className='cp-content storybook'>
        <div className={"field " + setPage}>
        <div className="field-group opt-box">
          <label className="field-radio">
            <input type="radio" name="optBox" />
            <span className="field-label">옵션1</span>
          </label>
          <label className="field-radio">
            <input type="radio" name="optBox" />
            <span className="field-label">옵션2</span>
          </label>
          <label className="field-radio">
            <input type="radio" name="optBox" />
            <span className="field-label">옵션3</span>
          </label>
        </div>
        </div>
      </div>
    )
    case 'box type2':
    return (
      <div className='cp-content storybook'>
        <div className={"field " + setPage}>
        <div className="field-group opt-box chk">
          <label className="field-checkbox">
            <input type="radio" name="optBox2" />
            <i className="field-icon"></i>
            <span className="field-label">옵션1</span>
          </label>
          <label className="field-checkbox">
            <input type="radio" name="optBox2" />
            <i className="field-icon"></i>
            <span className="field-label">옵션2</span>
          </label>
          <label className="field-checkbox">
            <input type="radio" name="optBox2" />
            <i className="field-icon"></i>
            <span className="field-label">옵션3</span>
          </label>
        </div>
        </div>
      </div>
    )

    case 'box type3':
    return (
      <div className='cp-content storybook'>
        <div className={"field " + setPage}>
        <div className="field-group textBox">
        <label className="field-radio">
          <input type="radio" name="txtRdo" />
          <span className="field-label">
            <i className="field-icon"></i>
            미체크
          </span>
        </label>
        <label className="field-radio">
          <input type="radio" name="txtRdo" checked="checked" />
          <span className="field-label">
            <i className="field-icon"></i>
            체크
          </span>
        </label>
        <label className="field-radio">
          <input type="radio" name="txtRdo" readonly="readonly" />
          <span className="field-label">
            <i className="field-icon"></i>
            readonly
          </span>
        </label>
        <label className="field-radio">
          <input type="radio" name="txtRdo" disabled="disabled" />
          <span className="field-label">
            <i className="field-icon"></i>
            disabled
          </span>
        </label>
        </div>
        </div>
      </div>
    )
    default:


  }
};

// Docs 문서 작성 영역
Raido.propTypes = {
};

// Docs 기본값
Raido.defaultProps = {
  // primary: false,
};

