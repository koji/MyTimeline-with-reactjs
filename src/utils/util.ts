import { 
    timeLine,
    contentfulItem,
} from '../Types';

export const formatData = (resp: any) => {
    const timeLineData: timeLine[] = resp.items.map((item: contentfulItem) => {
      const { title, cardTitle, cardSubtitle, cardDetailedText }= item.fields;
      const media = item.fields.mediaFile.fields;
      const mediaName = media.title;
      const url = media.file.url.replace('//', 'https://');
      const mediaType = media.description
      return {
        title: title,
        cardTitle: cardTitle,
        media: {
          name: mediaName,
          source: {
            url: url,
          },
          type: mediaType,
        },
        cardSubtitle: cardSubtitle,
        cardDetailedText: cardDetailedText
      }
    });
    return timeLineData;
}