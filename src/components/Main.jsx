import React from 'react';

function Main(props) {
  const {
    languages,
    textInto,
    idLangs,
    idLangsTranslate,
    textTranslated,
    onChangeText,
    handleTranslate
  } = props;

  console.log('textTranslated', textTranslated);

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
              name={'textTranslated'}
              onChange={onChangeText}
              value={textTranslated}
            ></textarea>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 form-group">
          <select
            className="form-control col-md-10"
            name={'idLangs'}
            onChange={onChangeText}
            value={idLangs}
          >
            <optgroup>
              <option value="" disabled selected>
                Elige tu idioma
              </option>
            </optgroup>
            <optgroup>
              {Object.keys(languages).map(key => (
                <option value={key}>{languages[key]}</option>
              ))}
            </optgroup>
          </select>
        </div>

        <div className="col-md-6 form-group">
          <select
            name={'idLangsTranslate'}
            className="form-control col-md-10"
            onChange={onChangeText}
            value={idLangsTranslate}
          >
            <optgroup>
              <option value="" disabled selected>
                Elige tu idioma
              </option>
            </optgroup>
            <optgroup>
              {Object.keys(languages).map(key => (
                <option value={key}>{languages[key]}</option>
              ))}
            </optgroup>
          </select>
        </div>
      </div>
      <div className="row">
        <button
          type="submit"
          className="btn btn-primary btn-translate"
          onClick={handleTranslate}
        >
          Translate
        </button>
      </div>
    </div>
  );
}

export default Main;
