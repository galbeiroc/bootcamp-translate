import React from 'react';

function Main(props) {
  const { dirs, languages, textInto, idLangs, onChangeText } = props;


  return (
    <div className="main-page">
      <div className="row">
        <div className="col-md-6">
          <div className="form-group ">
            <textarea
              className="form-control col-md-10"
              rows="6"
              name={'textInto'}
              onChange={onChangeText}
              value={textInto}
            ></textarea>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <textarea
              className="form-control col-md-10"
              rows="6"
              name={'textInto'}
              onChange={onChangeText}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 form-group">
          <select className="form-control col-md-10">
            <optgroup>
              <option value="" disabled selected>
                Elige tu idioma
              </option>
            </optgroup>
            <optgroup>
              {Object.keys(languages).map(key => (
                <option key={key}>{languages[key]}</option>
              ))}
            </optgroup>
          </select>
        </div>
        <div className="col-md-6 form-group">
          <select className="form-control col-md-10">
            <optgroup>
              <option value="" disabled selected>
                Elige tu idioma
              </option>
            </optgroup>
            <optgroup>
              {Object.keys(languages).map(key => (
                <option key={key}>{languages[key]}</option>
              ))}
            </optgroup>
          </select>
        </div>
      </div>
      <div className="row">
        <button type="button" className="btn btn-primary btn-translate">
          Translate
        </button>
      </div>
    </div>
  );
}

export default Main;
