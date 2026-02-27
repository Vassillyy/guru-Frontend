import { Topics, type IConfig } from '@/entities/topic';
import { configTypesOfData } from './configTypesOfData.ts';
import { configIntroductionToJS } from './configIntroductionToJS.ts';
import { configOperatorsAndSpecialValues } from './configOperatorsAndSpecialValues.ts';
import { configVariables } from './configVariables.ts';
import { configNumericSystems } from './configNumericSystems.ts';

export const config: IConfig = {
  [Topics.BASIC]: [
    configIntroductionToJS,
    configTypesOfData,
    configOperatorsAndSpecialValues,
    configVariables,
    configNumericSystems,
  ],
};
