import React, { HTMLProps, PureComponent, ChangeEvent } from 'react';
import classNames from 'classnames';
import { DayInput, MonthInput, YearInput } from './components/IndividualDateInputs';
import DateInputContext, { IDateInputContext } from './DateInputContext';
import { FormElementProps } from '../../util/types/FormTypes';
import useFormGroup from '../../util/hooks/UseFormGroup';
import useDateInput, { DateInputChangeEvent, DateInputValue } from '../../util/hooks/UseDateInput';

interface DateInputProps
  extends Omit<HTMLProps<HTMLDivElement>, 'label' | 'value' | 'defaultValue'>,
  FormElementProps {
  autoSelectNext?: boolean;
  value?: Partial<DateInputValue>;
  defaultValue?: Partial<DateInputValue>;
  onChange?: (e: DateInputChangeEvent) => void;
}

interface IDateInput extends React.FC<DateInputProps> {
  Day: typeof DayInput;
  Month: typeof MonthInput;
  Year: typeof YearInput;
}

const DateInput: IDateInput = (props) => {
  const { FormGroupWrapper, LabelBlock, wrapperProps, renderProps } = useFormGroup("dateinput", props);
  const dateInputFuncs = useDateInput(renderProps.value, renderProps.defaultValue, renderProps.onChange);
  const {
    className,
    id,
    name,
    error,
    value,
    defaultValue,
    children,
    onChange,
    ...restRenderProps
  } = renderProps;

  const contextValue: IDateInputContext = {
    id,
    name,
    error,
    value,
    defaultValue,
    ...dateInputFuncs
  }

  return (
    <FormGroupWrapper {...wrapperProps}>
      {LabelBlock}
      <div
        className={classNames("nhsuk-date-input", className)}
        id={id}
        {...restRenderProps}
      >
        <DateInputContext.Provider value={contextValue}>
          {children || (
            <>
              <DateInput.Day />
              <DateInput.Month />
              <DateInput.Year />
            </>
          )}
        </DateInputContext.Provider>
      </div>
    </FormGroupWrapper>
  )
}

DateInput.Day = DayInput;
DateInput.Month = MonthInput;
DateInput.Year = YearInput;

export default DateInput;
