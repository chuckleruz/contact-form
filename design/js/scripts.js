let Page;

Page ={

    init: function(){
        Page.Contact.init();
    },

    Contact: {
        /**
         * @type jQuery
         */
        $form: null,

        /**
         * Initialize page part.
         */
        init: function() {
            this.$form = $('.contact-form');

            if (this.$form.length) {
                let form = new ContactForm(this.$form);

            }
        }
    }
};

$(Page.init);