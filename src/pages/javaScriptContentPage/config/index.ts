import { type IConfig } from '@/entities/topic';
import { configArrays } from './configArrays.ts';
import { configConditionalStatements } from './configConditionalStatements.ts';
import { configConstructor } from './configConstructor.ts';
import { configFunctions } from './configFunctions.ts';
import { configIntroductionToJS } from './configIntroductionToJS.ts';
import { configLoops } from './configLoops.ts';
import { configNumericSystems } from './configNumericSystems.ts';
import { configObjectBasics } from './configObjectBasics.ts';
import { configObjectMethods } from './configObjectMethods.ts';
import { configObjectToPrimitive } from './configObjectToPrimitive.ts';
import { configOperatorsAndSpecialValues } from './configOperatorsAndSpecialValues.ts';
import { configTypeConversion } from './configTypeConversion.ts';
import { configTypesOfData } from './configTypesOfData.ts';
import { configVariables } from './configVariables.ts';
import { configMapSet } from './configMapSet.ts';

export const config: IConfig = [
  configIntroductionToJS,
  configTypesOfData,
  configTypeConversion,
  configOperatorsAndSpecialValues,
  configVariables,
  configNumericSystems,
  configLoops,
  configConditionalStatements,
  configFunctions,
  configObjectBasics,
  configObjectMethods,
  configConstructor,
  configObjectToPrimitive,
  configArrays,
  configMapSet,
];
