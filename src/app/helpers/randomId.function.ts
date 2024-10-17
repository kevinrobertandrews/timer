export function randomId(): string {
  return Math.random().toString().split('.')[1];
}

export function randomName(): string {
  const names = ["Bob", "Kevin", "Mary", "Sue"];

  return names[Math.floor(Math.random() * names.length)]
}