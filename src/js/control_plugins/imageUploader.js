/**
 * Custom Image  Uploader
 */

// configure the class for runtime loading
if (!window.fbControls) window.fbControls = [];
window.fbControls.push(function(controlClass) {
  /**
   * Custom Image  Uploader class
   */
  class controlImageUploader extends controlClass {

    /**
     * Class configuration - return the icons & label related to this control
     * @returndefinition object
     */
    static get definition() {
      return {
        icon: 'Up',
        i18n: {
          default: 'Custom image uploader'
        }
      };
    }

    /**
     * javascript & css to load
     */
    configure() {
    }

    /**
     * build a text DOM element, supporting other jquery text form-control's
     * @return {Object} DOM Element to be injected into the form.
     */
    build() {
      return this.markup('span', null, {id: this.config.name});
    }

    /**
     * onRender callback
     */
    onRender() {
      let value = this.config.value || 3.6;
      $('#'+this.config.name).rateYo({rating: value});
    }
  }

  // register this control for the following types & text subtypes
  controlClass.register('imageUploader', controlImageUploader);
  return controlImageUploader;
});
