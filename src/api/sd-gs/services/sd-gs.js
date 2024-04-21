'use strict';

/**
 * sd-gs service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sd-gs.sd-gs');
