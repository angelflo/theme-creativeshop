/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
/*global define*/
define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/step-navigator',
    ],
    function (Component, stepNavigator ) {
        "use strict";
        return Component.extend({
            defaults: {
                displayArea: 'next-button',
                template: 'Magento_Checkout/next-button'
            },
            isHidden: function() {
                return stepNavigator.getActiveItemIndex() == 1;
            }
        });
    }
);
