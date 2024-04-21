"use strict";

/**
 * photo-gallery controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::photo-gallery.photo-gallery",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;

      const entity = await strapi.db
        .query("api::photo-gallery.photo-gallery")
        .findOne({
          where: { slug: id },
          populate: ["images", "images.src", "thumbnail"],
        });

      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(sanitizedEntity);
    },
  })
);
