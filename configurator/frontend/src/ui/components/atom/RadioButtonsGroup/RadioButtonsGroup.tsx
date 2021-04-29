// @Libs
import { useCallback, useState } from 'react';
import cn from 'classnames';
// @Styles
import styles from './RadioButtonsGroup.module.less';

interface RadioListItem<V> {
  value: V;
  label: string;
}

interface Props<V = any> {
  list: RadioListItem<V>[];
  onChange: (value: V) => void;
  initialValue: V;
}

const RadioButtonsGroup = <V, >({ list, onChange, initialValue }: Props<V>) => {
  const [checkedIndex, setCheckedIndex] = useState<number>(
    list.findIndex((i: RadioListItem<V>) => i.value === initialValue)
  );

  const handleClick = useCallback((value: any, index: number) => () => {
    setCheckedIndex(index);

    onChange(value);
  }, [onChange]);

  return (
    <div className={styles.group}>
      {
        list.map(({ value, label }: RadioListItem<V>, index: number) =>
          <div
            className={cn(styles.radio, checkedIndex === index && styles.checked)}
            key={String(value)}
            onClick={handleClick(value, index)}
          >
            {label}
          </div>
        )
      }
    </div>
  );
};

RadioButtonsGroup.displayName = 'RadioButtonsGroup';

export { RadioButtonsGroup };
