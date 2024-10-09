import { resolvePath } from '@/utils/helper';
import { Controller } from 'react-hook-form';
import { z } from 'zod';

const SchemaProps = z.any()

type HOCschema = z.infer<typeof SchemaProps>

export function withController(Component: HOCschema, options: HOCschema = {}) {
    return (props: HOCschema) => {
      const {
        name, control, rules, defaultValue, errors = {},
        ...rest
      } = props;
  
      return (
        <Controller
          name={name}
          control={control}
          rules={rules}
          defaultValue={defaultValue ?? options.defaultValue ?? null}
          render={({ field: { value, onChange, onBlur, ref } }) => {
            return (
              <Component
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                errorMsg={resolvePath(errors, name)?.message}
                innerRef={ref}
                {...rest}
              />
            )
          }}
        />
      );
    };
  }