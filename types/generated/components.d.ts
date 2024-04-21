import type { Schema, Attribute } from '@strapi/strapi';

export interface SectionsArabCoordinationSection extends Schema.Component {
  collectionName: 'components_sections_arab_coordination_sections';
  info: {
    displayName: 'Arab Coordination Section';
    icon: 'sun';
    description: '';
  };
  attributes: {
    header_image: Attribute.Media;
    content: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    action: Attribute.Component<'ui.button'>;
  };
}

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

export interface SectionsBadeaTrack extends Schema.Component {
  collectionName: 'components_sections_badea_tracks';
  info: {
    displayName: 'BADEA Track';
    icon: 'command';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.Text;
    tracks: Attribute.Component<'ui.track-card', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 8;
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
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    content: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
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
    images_blocks: Attribute.Component<'ui.scatter-image-block', true> &
      Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
  };
}

export interface SectionsOperationStatistics extends Schema.Component {
  collectionName: 'components_sections_operation_statistics';
  info: {
    displayName: 'Operation Statistics';
    icon: 'chartPie';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.Text;
    sdgs: Attribute.Relation<
      'sections.operation-statistics',
      'oneToMany',
      'api::sd-gs.sd-gs'
    >;
  };
}

export interface SectionsSuccessStories extends Schema.Component {
  collectionName: 'components_sections_success_stories';
  info: {
    displayName: 'Success Stories';
    icon: 'discuss';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    button: Attribute.Component<'ui.button'>;
    stories: Attribute.Relation<
      'sections.success-stories',
      'oneToMany',
      'api::story.story'
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
    description: '';
  };
  attributes: {
    label: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Read more'>;
    href: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'/success-stories'>;
  };
}

export interface UiImage extends Schema.Component {
  collectionName: 'components_ui_images';
  info: {
    displayName: 'Image';
    icon: 'picture';
    description: '';
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
    description: '';
  };
  attributes: {
    images: Attribute.Component<'ui.image', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 4;
        },
        number
      >;
    block_name: Attribute.String;
  };
}

export interface UiTextBlock extends Schema.Component {
  collectionName: 'components_ui_text_blocks';
  info: {
    displayName: 'Text Block';
    icon: 'italic';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
          maxLengthCharacters: 100;
        }
      >;
  };
}

export interface UiTextImageBlock extends Schema.Component {
  collectionName: 'components_ui_text_image_blocks';
  info: {
    displayName: 'Text Image Block';
    icon: 'chartBubble';
    description: '';
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
    image: Attribute.Media;
    action: Attribute.Component<'ui.button'>;
  };
}

export interface UiTrackCard extends Schema.Component {
  collectionName: 'components_ui_track_cards';
  info: {
    displayName: 'Track Card';
    icon: 'command';
  };
  attributes: {
    description: Attribute.Text & Attribute.Required;
    icon: Attribute.Media & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'sections.arab-coordination-section': SectionsArabCoordinationSection;
      'sections.badea-at-glance': SectionsBadeaAtGlance;
      'sections.badea-track': SectionsBadeaTrack;
      'sections.golden-jubilee': SectionsGoldenJubilee;
      'sections.hero-section': SectionsHeroSection;
      'sections.operation-statistics': SectionsOperationStatistics;
      'sections.success-stories': SectionsSuccessStories;
      'sections.timeline-section': SectionsTimelineSection;
      'ui.button': UiButton;
      'ui.image': UiImage;
      'ui.scatter-image-block': UiScatterImageBlock;
      'ui.text-block': UiTextBlock;
      'ui.text-image-block': UiTextImageBlock;
      'ui.track-card': UiTrackCard;
    }
  }
}
