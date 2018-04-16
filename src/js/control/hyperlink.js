import control from '../control';

/**
 * Hyperlink class
 * Output a <a>Label</a> form element
 */
export default class controlHyperlink extends control {
    /**
       * configure the quill editor requirements
    */
  configure() {}

   /**
       * Define cotroller icon and name
    */
  static get definition() {
    return {
      icon: '<b>A</b>',
      i18n: {
        default: 'Hyperlink'
      }
    };
  }

  /**
   * build a text DOM element, supporting other jquery text form-control's
   * @return {Object} DOM Element to be injected into the form.
   */
  build() {
    return {
      field: this.markup('a', this.label, this.config),
    };
  }
}

// register the following controls
control.register('hyperlink', controlHyperlink);

