import React from 'react';
import PropTypes from 'prop-types';
import './../style/storyBook.scss'
import './../style/cm.common.scss';


export const Checkbox = ({setPage, primary, checked, readonly, disabled, backgroundColor, style, size, label, ...props }) => {
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
            <label className="field-checkbox">
                { 
                  readonly == true ? <input type="checkbox" 
                  disabled = {Disable}
                  checked = {Checked}
                  readonly = {Readonly}
                  />
                  : <input type="checkbox" 
                  disabled = {Disable}
                  checked = {Checked}
                  />
                }
              <i className="field-icon"></i>
              <span className="field-label">
                {Txt + ' Checkbox'}
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
            <label className="field-checkbox">
                <input type="checkbox" />
              <i className="field-icon"></i>
              <span className="field-label">미체크</span>
            </label>
            <label className="field-checkbox">
              <input type="checkbox" checked="checked" />
              <i className="field-icon"></i>
              <span className="field-label">체크</span>
            </label>
            <label className="field-checkbox">
              <input type="checkbox" readonly="readonly" />
              <i className="field-icon"></i>
              <span className="field-label">readonly</span>
            </label>
            <label className="field-checkbox">
              <input type="checkbox" disabled="disabled" />
              <i className="field-icon"></i>
              <span className="field-label">disabled</span>
            </label>
          </div>
        </div>
      </div>
    )
    case 'c-line':
    return (
      <div className='cp-content'>
        <div className={"field " + setPage}>
          <div className="field-group">
            <label className="field-checkbox">
                <input type="checkbox" />
              <i className="field-icon"></i>
              <span className="field-label">미체크</span>
            </label>
            <label className="field-checkbox">
              <input type="checkbox" checked="checked" />
              <i className="field-icon"></i>
              <span className="field-label">체크</span>
            </label>
            <label className="field-checkbox">
              <input type="checkbox" readonly="readonly" />
              <i className="field-icon"></i>
              <span className="field-label">readonly</span>
            </label>
            <label className="field-checkbox">
              <input type="checkbox" disabled="disabled" />
              <i className="field-icon"></i>
              <span className="field-label">disabled</span>
            </label>
          </div>
        </div>
      </div>
    )

    case 'c-line':
    return (
      <div className='cp-content'>
        <div className={"field " + setPage}>
          <div className="field-group">
            <label className="field-checkbox">
                <input type="checkbox" />
              <i className="field-icon"></i>
              <span className="field-label">미체크</span>
            </label>
            <label className="field-checkbox">
              <input type="checkbox" checked="checked" />
              <i className="field-icon"></i>
              <span className="field-label">체크</span>
            </label>
            <label className="field-checkbox">
              <input type="checkbox" readonly="readonly" />
              <i className="field-icon"></i>
              <span className="field-label">readonly</span>
            </label>
            <label className="field-checkbox">
              <input type="checkbox" disabled="disabled" />
              <i className="field-icon"></i>
              <span className="field-label">disabled</span>
            </label>
          </div>
        </div>
      </div>
    )
    case 'square':
    return (
      <div className='cp-content'>
        <div className={"field " + setPage}>
          <div className="field-group">
            <label className="field-checkbox">
                <input type="checkbox" />
              <i className="field-icon"></i>
              <span className="field-label">미체크</span>
            </label>
            <label className="field-checkbox">
              <input type="checkbox" checked="checked" />
              <i className="field-icon"></i>
              <span className="field-label">체크</span>
            </label>
            <label className="field-checkbox">
              <input type="checkbox" readonly="readonly" />
              <i className="field-icon"></i>
              <span className="field-label">readonly</span>
            </label>
            <label className="field-checkbox">
              <input type="checkbox" disabled="disabled" />
              <i className="field-icon"></i>
              <span className="field-label">disabled</span>
            </label>
          </div>
        </div>
      </div>
    )
    case 's-line':
      return (
        <div className='cp-content'>
          <div className={"field " + setPage}>
            <div className="field-group">
              <label className="field-checkbox">
                  <input type="checkbox" />
                <i className="field-icon"></i>
                <span className="field-label">미체크</span>
              </label>
              <label className="field-checkbox">
                <input type="checkbox" checked="checked" />
                <i className="field-icon"></i>
                <span className="field-label">체크</span>
              </label>
              <label className="field-checkbox">
                <input type="checkbox" readonly="readonly" />
                <i className="field-icon"></i>
                <span className="field-label">readonly</span>
              </label>
              <label className="field-checkbox">
                <input type="checkbox" disabled="disabled" />
                <i className="field-icon"></i>
                <span className="field-label">disabled</span>
              </label>
            </div>
          </div>
        </div>
      )

      case 'switch':
      return (
        <div className='cp-content'>
          <div className={"field " + setPage}>
            <div className="field-group">
              <label className={"field-" + setPage}>
                  <input type="checkbox" name={setPage}/>
                <i className="field-icon"></i>
              </label>
              <label className={"field-" + setPage + " txt"}>
                <input type="checkbox" name={setPage}/>
                <i className="field-icon"></i>
              </label>
              <label className={"field-" + setPage + " lg"}>
                <input type="checkbox" name={setPage}/>
                <i className="field-icon"></i>
              </label>
              <label className={"field-" + setPage}>
                <input type="checkbox" name="switch" readonly="readonly" checked="checked"/>
                <i className="field-icon"></i>
              </label>
              <label className={"field-" + setPage}>
                <input type="checkbox" name="switch" disabled="disabled"/>
                <i className="field-icon"></i>
              </label>
            </div>
          </div>
        </div>
      )

      case 'box':
      return (
        <div className='cp-content storybook'>
          <div className={"field " + setPage}>
            <div className="field-group textBox">
              <label className="field-checkbox">
                <input type="checkbox"/>
                <span className="field-label">08<br/>미체크</span>
              </label>
              <label className="field-checkbox">
                <input type="checkbox" checked="checked"/>
                <span className="field-label">09<br/>체크</span>
              </label>
              <label className="field-checkbox">
                <input type="checkbox" readonly="readonly"/>
                <span className="field-label">10<br/>readonly</span>
              </label>
              <label className="field-checkbox">
                <input type="checkbox" disabled="disabled"/>
                <span className="field-label">11<br/>disabled</span>
              </label>
            </div>
          </div>
        </div>
      )
    


  }
};

// Docs 문서 작성 영역
Checkbox.propTypes = {
  
};

// Docs 기본값
Checkbox.defaultProps = {
  // checked: false,
  // readonly: false,
  // disabled: false,
};

