import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

export function StartWith(
  prefix: string,
  validationOptions?: ValidationOptions,
) {
  return (object: Object, propertyName: string) => {
    registerDecorator({
      name: 'startWith',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: {
        validate: (value: any, args: ValidationArguments) => {
          return typeof value === 'string' && value.startsWith(prefix);
        },
        defaultMessage(args: ValidationArguments) {
          return `Nom shu bilan boshlanishi kerak "${prefix}"`;
        },
      },
    });
  };
}
