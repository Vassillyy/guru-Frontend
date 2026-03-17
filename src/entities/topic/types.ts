export interface ITopic {
  value: string;
  name: string;
  content: {
    introduction: string;
    sections: ITopicSection[];
  };
}

export interface ITopicSection {
  title: string;
  content: string;
  addition: string;
  examples?: string;
}

export type IConfig = {
  [key in Topics]: ITopic[];
};

export enum Topics {
  BASIC = 'BASIC',
  OBJECT = 'OBJECT',
}

export const labelTopics = {
  [Topics.BASIC]: 'Основы JavaScript',
  [Topics.OBJECT]: 'Объектная модель JavaScript',
};
