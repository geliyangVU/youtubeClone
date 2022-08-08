function omitPassword<T>(object: T, property: keyof T | (keyof T)[]) {
  if (Array.isArray(property)) {
    const entries = Object.entries(object).filter((item) => {
      const [key] = item;
      return !property.includes(key as keyof T);
    });
    return Object.fromEntries(entries);
  }

  const { [property]: unused, ...rest } = object;

  return rest;
}

export default omitPassword;
