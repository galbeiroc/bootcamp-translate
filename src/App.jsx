import React, { Component } from 'react';
import Main from './components/Main';
import { TranslateServices } from './services/index';
import axios from 'axios';
import { API_KEY } from './config';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dirs: [],
      languages: {},
      textInto: '',
      textTranslated: [],
      idLangs: '',
      idLangsTranslate: ''
    };

    this.services = new TranslateServices();
  }
  componentDidMount() {
    this.getLanguages();
  }

  onChangeText = ({ target: { name, value } }) => {
    console.log('values: ', name, value);
    this.setState({
      [name]: value
    });
  };

  handleTranslate = e => {
    e.preventDefault();
    axios
      .post(
        `https://translate.yandex.net/api/v1.5/tr.json/translate?lang=${this.state.idLangs}-${this.state.idLangsTranslate}&format=text&key=${API_KEY}&text=${this.state.textInto}`
      )
      .then(res => {
        console.log('res ----', res.data);
        this.setState({ textTranslated: res.data.text });
      })
      .catch(err => console.log('error', err));
  };

  getLanguages = () => {
    this.services
      .getAllLanguages()
      .then(res => {
        this.setState({
          dirs: res.data.dirs,
          languages: res.data.langs
        });
      })
      .catch(err => console.log('error', err));
  };

  render() {
    const { dirs, languages, textInto, idLangs, idLangsTranslate, textTranslated } = this.state;
    return (
      <div className="container">
        <h1 className="heading">Mini Translator</h1>
        <Main
          languages={languages}
          textInto={textInto}
          idLangs={idLangs}
          idLangsTranslate={idLangsTranslate}
          textTranslated={textTranslated}
          onChangeText={this.onChangeText}
          handleTranslate={this.handleTranslate}
        />
      </div>
    );
  }
}

export default App;
