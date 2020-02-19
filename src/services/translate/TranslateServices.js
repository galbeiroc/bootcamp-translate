import TranslateServicesDefitions from './TranslateServicesDefitions';
import Services from '../DefaultServices';

export default class ArtistServices extends Services {
  getAllLanguages() {
    return this.get(TranslateServicesDefitions.getListLang);
  }
}