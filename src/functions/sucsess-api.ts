export default function handleSuccsesApi<T extends object>(data: T) {
  return { data: data, ok: true, error: null };
}
