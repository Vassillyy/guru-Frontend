export interface ITopic {
  value: string;
  title: string;
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

export const enum Topics {
  BASIC = 'BASIC',
}

export const labelTopics = {
  [Topics.BASIC]: 'Основы JavaScript',
};
