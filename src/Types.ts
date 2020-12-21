type mediaType = 'IMAGE';

type media = {
  name: string;
  source: {
    url: string;
  }
  type: 'IMAGE';
}

export type contentfulItem = {
  sys: any;
  fields: fields;
}

type fields = {
  title: string;
  cardTitle: string;
  mediaFile: {
    sys: any;
    fields: {
      title: string;
      file: {
        url: string;
      }
      description: mediaType;
    };
  };
  cardSubtitle: string;
  cardDetailedText: string;
}

export type timeLine = {
  title: string;
  cardTitle: string;
  media: media;
  cardSubtitle: string;
  cardDetailedText: string;
}