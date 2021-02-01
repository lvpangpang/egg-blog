export function setItem(name: string, data: any) {
  const type = typeof data;
  if (type ==='object'||data!==null) {
    data = JSON.stringify(data);
  }
  localStorage.setItem(name, data);
}

export function getItem(name: string) {
  let data = localStorage.getItem(name);
  try {
    data = JSON.parse(data);
  } catch(err) {}
  return data;
}