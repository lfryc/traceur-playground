function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export async function asyncValue(value) {
  await timeout(50);
  return value;
}