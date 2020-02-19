import { API_PATH, API_KEY } from '../../config';

const TranslateServicesDefitions = Object.freeze({
  getListLang: `${API_PATH}getLangs?key=${API_KEY}&ui=en`,
});

export default TranslateServicesDefitions;