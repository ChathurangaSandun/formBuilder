import control from '../control';

/**
 * Hidden input class
 * Output a <img src="..." alt="..."/> form element
 */
export default class controlImage extends control {

  /**
   * build a hidden input dom element
   * @return {Object} DOM Element to be injected into the form.
   */
  build() {
    return {
      field: this.markup('input', null, this.config),
      layout: 'hidden'
    };
  }
}

// register the following controls
control.register('hidden', controlHidden);