export type DynamicActionTypes<T> = {
  [Name in keyof T]: T[Name] extends (...args: any[]) => any ? ReturnType<T[Name]> : never;
}[keyof T];
