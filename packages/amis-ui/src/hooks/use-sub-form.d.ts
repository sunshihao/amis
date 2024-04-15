import { TranslateFn } from 'amis-core';
import { UseFormReturn } from 'react-hook-form';
declare const useSubForm: (defaultValue: any, translate: TranslateFn, onUpdate: (data: any) => void) => UseFormReturn;
export default useSubForm;
