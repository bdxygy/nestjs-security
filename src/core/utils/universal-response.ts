export type UniversalResponse<T> = {
  data: T;
  message: string;
  error: string | null;
  status: number;
};
