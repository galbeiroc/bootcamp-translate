import React, { Component } from 'react';
import Main from './components/Main';
import { TranslateServices } from './services/index';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dirs: [],
      languages: {},
      textInto: '',
      idLangs: ''
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


  getLanguages = () => {
    this.services
      .getAllLanguages()
      .then(res => {
        //console.log('res data', res.data.langs)
        this.setState({
          dirs: res.data.dirs,
          languages: res.data.langs
        });
      })
      .catch(err => console.log('error', err));
  };

  render() {
    const { dirs, languages, textInto, idLangs } = this.state;
    return (
      <div className="container">
        <h1 className="heading">Mini Translator</h1>
        <Main
          dirs={dirs}
          languages={languages}
          textInto={textInto}
          idLangs={idLangs}
          onChangeText={this.onChangeText}
        />
      </div>
    );
  }
}

export default App;
