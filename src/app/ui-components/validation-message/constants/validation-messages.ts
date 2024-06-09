export const ValidationMessages = {
  required: 'Поле обязательно для заполнения',
  minLength: (length: number): string =>
    `Минимальное количество символов: ${length}`,
};
