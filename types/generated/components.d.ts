import type { Schema, Attribute } from '@strapi/strapi';

export interface SectionsBadeaAtGlance extends Schema.Component {
  collectionName: 'components_sections_badea_at_glances';
  info: {
    displayName: 'BADEA at Glance';
    icon: 'bold';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.Text;
    data: Attribute.Component<'ui.text-image-block', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 5;
        },
        number
      >;
  };
}

export interface SectionsGoldenJubilee extends Schema.Component {
  collectionName: 'components_sections_golden_jubilees';
  info: {
    displayName: 'Golden Jubilee';
    icon: 'crown';
  };
  attributes: {
    data: Attribute.Component<'ui.text-image-block'> & Attribute.Required;
  };
}

export interface SectionsHeroSection extends Schema.Component {
  collectionName: 'components_sections_hero_sections';
  info: {
    displayName: 'Hero Section';
    icon: 'file';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    golden_Jubilee_image: Attribute.Media;
    images: Attribute.Component<'ui.scatter-image-block', true> &
      Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
  };
}

export interface SectionsTimelineSection extends Schema.Component {
  collectionName: 'components_sections_timeline_sections';
  info: {
    displayName: 'Timeline Section';
    icon: 'layer';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String;
    timelines: Attribute.Relation<
      'sections.timeline-section',
      'oneToMany',
      'api::timeline.timeline'
    >;
  };
}

export interface UiButton extends Schema.Component {
  collectionName: 'components_ui_buttons';
  info: {
    displayName: 'button';
    icon: 'oneToMany';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    href: Attribute.String & Attribute.Required;
  };
}

export interface UiImage extends Schema.Component {
  collectionName: 'components_ui_images';
  info: {
    displayName: 'Image';
    icon: 'picture';
  };
  attributes: {
    alt: Attribute.String;
    src: Attribute.Media & Attribute.Required;
  };
}

export interface UiScatterImageBlock extends Schema.Component {
  collectionName: 'components_ui_scatter_image_blocks';
  info: {
    displayName: 'Scatter Image Block';
    icon: 'picture';
  };
  attributes: {
    block: Attribute.Component<'ui.image', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 4;
        },
        number
      >;
  };
}

export interface UiTextImageBlock extends Schema.Component {
  collectionName: 'components_ui_text_image_blocks';
  info: {
    displayName: 'Text Image Block';
    icon: 'chartBubble';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    action: Attribute.Component<'ui.button'>;
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'sections.badea-at-glance': SectionsBadeaAtGlance;
      'sections.golden-jubilee': SectionsGoldenJubilee;
      'sections.hero-section': SectionsHeroSection;
      'sections.timeline-section': SectionsTimelineSection;
      'ui.button': UiButton;
      'ui.image': UiImage;
      'ui.scatter-image-block': UiScatterImageBlock;
      'ui.text-image-block': UiTextImageBlock;
    }
  }
}
